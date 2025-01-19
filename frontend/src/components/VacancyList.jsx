import React, { useState, useEffect } from 'react';
import Vacancy from './Vacancy';

export default function VacancyList() {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        fetch('https://api.hh.ru/vacancies?text=Python&period=1&per_page=10')
            .then(response => response.json())
            .then(data => {
                const sortedVacancies = data.items.sort((a, b) => {
                    return new Date(b.published_at) - new Date(a.published_at);
                });

                const vacanciesWithDetails = sortedVacancies.map(vacancy => {
                    return fetch(`https://api.hh.ru/vacancies/${vacancy.id}`)
                        .then(response => response.json())
                        .then(details => {
                            return {
                                ...vacancy,
                                description: details.description,
                            };
                        });
                });

                Promise.all(vacanciesWithDetails)
                    .then(updatedVacancies => {
                        setVacancies(updatedVacancies);
                    });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, []);

    return (
        <div className="list-group">
            {vacancies.map(vacancy => (
                <Vacancy
                    key={vacancy.id}
                    name={vacancy.name}
                    url={vacancy.alternate_url}
                    date={new Date(vacancy.published_at).toLocaleString()}
                    description={vacancy.description}
                    companyName={vacancy.employer.name}
                />
            ))}
        </div>
    );
}