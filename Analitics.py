import pandas as pd
from collections import Counter


python = True
df_vacancies = pd.read_csv('vacancies_2024.csv')
df_currency = pd.read_csv('currency.csv')

if python:
    df_vacancies = df_vacancies[df_vacancies['name'].str.contains('Python', case=False, na=False)]

df_vacancies['year-month'] = df_vacancies['published_at'].str[:7]
df_vacancies['year'] = df_vacancies['published_at'].str[:4]
df_vacancies['salary'] = (df_vacancies['salary_from'].fillna(df_vacancies['salary_to']) + df_vacancies['salary_to']) / 2

df_currency['year-month'] = df_currency['date']
df_merged = pd.merge(df_vacancies, df_currency, on='year-month', how='left')


def convert_salary(row):
    salary = row['salary']
    currency = row['salary_currency']
    if pd.notna(currency) and currency in df_currency.columns:
        exchange_rate = row[currency]
        if pd.notna(exchange_rate):
            return salary * exchange_rate
    return salary


df_merged['salary_rub'] = df_merged.apply(convert_salary, axis=1)
df_filtered = df_merged[df_merged['salary_rub'] <= 10_000_000]

df_grouped_year_salary = df_filtered.groupby('year')['salary_rub'].mean().round(2).reset_index()
df_grouped_year_cnt = df_merged.groupby('year')['name'].count().reset_index()

df_grouped_city_salary = df_filtered.groupby('area_name')['salary_rub'].mean().round(2).sort_values(ascending=False).head(20).reset_index()
df_grouped_city_cnt = df_merged.groupby('area_name')['name'].count().sort_values(ascending=False).head(20).reset_index()

top_skills_by_year_dict = {}
for year, group in df_merged.groupby('year'):
    skills_counter = Counter()

    for skills in group['key_skills'].dropna():
        skills_list = [skill.strip() for skill in skills.split('\n')]
        skills_counter.update(skills_list)

    top_skills = skills_counter.most_common(20)
    top_skills_df = pd.DataFrame(top_skills, columns=['Навык', 'Количество'])
    top_skills_df.insert(0, '№', range(1, len(top_skills_df) + 1))
    top_skills_by_year_dict[year] = top_skills_df


# Вывод результатов
print("Средняя зарплата по годам")
print(df_grouped_year_salary)
print("-------------------------")
print("Количество вакансий по годам")
print(df_grouped_year_cnt)
print("-------------------------")
print("Средняя зарплата по городам")
print(df_grouped_city_salary)
print("-------------------------")
print("Количество вакансий по городам")
print(df_grouped_city_cnt)
print("-------------------------")
print("НАВЫКИ")
for i in top_skills_by_year_dict:
    print(i)
    print(top_skills_by_year_dict[i])
print("-------------------------")
