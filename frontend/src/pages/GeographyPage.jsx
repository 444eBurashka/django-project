import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import BarChart from "../components/BarChart";
import PieChart from "./PieChart";
import Table from "../components/Table";

import React, { useEffect, useState } from 'react';


export default function GeographyPage() {
    const [LeveltableData, setLevelTableData] = useState([]);
      const [LevelchartData, setLevelChartData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Среднее значение',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    
      const LevelfetchData = async () => {
        try {
          const response = await fetch('https://profsort.ru/api/levelpython/');
          if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
          }
          const data = await response.json();
    
          const labels = data.map((item) => item.city.toString());
          const meanValues = data.map((item) => item.mean);
    
          setLevelChartData({
            labels: labels,
            datasets: [
              {
                ...LevelchartData.datasets[0],
                data: meanValues,
              },
            ],
          });
          setLevelTableData(data);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      };
    
      useEffect(() => {
        LevelfetchData();
      }, []);
    
      const optionsLevel = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Уровень зарплат по городам',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
      const [FractiontableData, setFractionTableData] = useState([]);
      const [FractionchartData, setFractionChartData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Доля вакансий',
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    
      const FractionfetchData = async () => {
        try {
          const response = await fetch('https://profsort.ru/api/fractionpython/');
          if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
          }
          const data = await response.json();
    
          const labels = data.map((item) => item.city.toString());
          const cntValues = data.map((item) => item.cnt);
    
          setFractionChartData({
            labels: labels,
            datasets: [
              {
                ...FractionchartData.datasets[0],
                data: cntValues,
              },
            ],
          });
          setFractionTableData(data);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      };
    
      useEffect(() => {
        FractionfetchData();
      }, []);
    
      const optionsFraction = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Доля вакансий по городам',
          },
        },
      };
    
    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>ГЕОГРАФИЯ</h1>
                    <BarChart chartData={LevelchartData} options={optionsLevel} />
                    <Table data={LeveltableData} />
                    <PieChart chartData={FractionchartData} options={optionsFraction} />
                    <Table data={FractiontableData} />
                </div>
                <Footer />
            </div>
        </div>
    )
}