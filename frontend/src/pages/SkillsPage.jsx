import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Table from "../components/Table";

import React, { useEffect, useState } from 'react';


export default function SkillsPage() {
    const [TopData, setTopData] = useState([]);
    
      const fetchTopData = async () => {
        try {
          const response = await fetch('https://profsort.ru/api/toppython/');
          if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
          }
          const data = await response.json();
          setTopData(data);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      };
    
      useEffect(() => {
        fetchTopData();
      }, []);
    
      const prepareTopData = (data) => {
        return data.map((item) => {
          const skillsWithPosition = item.top20.map((skill, index) => ({
            position: index + 1,
            skill: skill,
          }));
          return {
            year: item.year,
            skills: skillsWithPosition,
          };
        });
      };
    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>НАВЫКИ</h1>
                    <h2>Топ-20 навыков по годам</h2>
                    {
                      prepareTopData(TopData).map((yearData) => (
                        <div key={yearData.year}>
                          <h3>Год: {yearData.year}</h3>
                          <Table data={yearData.skills} />
                        </div>
                      ))
                    }
                </div>
                <Footer />
            </div>
        </div>
    )
}