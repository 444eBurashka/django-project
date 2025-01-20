import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import LineChart from "../components/LineChart";
import Table from "../components/Table";

import React, { useEffect, useState } from 'react';

export default function StatsPage() {
    const [tableData, setTableData] = useState([]);
    const [GeneralchartData, setGeneralChartData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Среднее значение',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://profsort.ru/api/general/');
          if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
          }
          const data = await response.json();
    
          const labels = data.map((item) => item.year.toString());
          const meanValues = data.map((item) => item.mean);
    
          setGeneralChartData({
            labels: labels,
            datasets: [
              {
                ...GeneralchartData.datasets[0],
                data: meanValues,
              },
            ],
          });
          setTableData(data);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      };
      fetchData();
      
    
      useEffect(() => {
      }, []);
    
      const optionsGeneral = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'График средних значений по годам',
          },
        },
      };
    
      console.log(GeneralchartData);

    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>ОБЩАЯ СТАТИСТИКА</h1>
                    <LineChart chartData={GeneralchartData} options={optionsGeneral} />
                    <Table data={tableData} />
                </div>
                <Footer />
            </div>
        </div>
    )
}