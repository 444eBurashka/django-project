import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import LineChart from "../components/LineChart";
import Table from "../components/Table";

import React, { useEffect, useState } from 'react';


export default function RelevancePage() {
    const [GeneraltableData, setGeneralTableData] = useState([]);
      const [GeneralchartData, setGeneralChartData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Среднее значение зарплаты',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });
    
      const GeneralfetchData = async () => {
        try {
          const response = await fetch('https://profsort.ru/api/generalpython/');
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
          setGeneralTableData(data);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      };
    
      useEffect(() => {
        GeneralfetchData();
      }, []);
    
      const optionsGeneral = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'График средних значений зарплат по годам',
          },
        },
      };
    
      const [QuantitytableData, setQuantityTableData] = useState([]);
      const [QuantitychartData, setQuantityChartData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Количество вакансий',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });
    
      const QuantityfetchData = async () => {
        try {
          const response = await fetch('https://profsort.ru/api/quantitypython/');
          if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
          }
          const data = await response.json();
    
          const labels = data.map((item) => item.year.toString());
          const cntValues = data.map((item) => item.cnt);
    
          setQuantityChartData({
            labels: labels,
            datasets: [
              {
                ...QuantitychartData.datasets[0],
                data: cntValues,
              },
            ],
          });
          setQuantityTableData(data);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      };
    
      useEffect(() => {
        QuantityfetchData();
      }, []);
    
      const optionsQuantity = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Количество вакансий по годам',
          },
        },
      };
    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>ВОСТРЕБОВАННОСТЬ</h1>
                    <LineChart chartData={GeneralchartData} options={optionsGeneral} />
                    <Table data={GeneraltableData} />
                    <LineChart chartData={QuantitychartData} options={optionsQuantity} />
                    <Table data={QuantitytableData} />
                </div>
                <Footer />
            </div>
        </div>
    )
}