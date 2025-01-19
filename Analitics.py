import pandas as pd


df_vacancies = pd.read_csv('vacancies_2024.csv')
df_currency = pd.read_csv('currency.csv')


df_vacancies['year-month'] = df_vacancies['published_at'].str[:7]
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


print(df_merged.head(30))