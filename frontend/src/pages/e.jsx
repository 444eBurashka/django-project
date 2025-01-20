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
            const response = await fetch('https://profsort.ru/api/fraction/');
            if (!response.ok) {
              throw new Error('Ошибка при загрузке данных');
            }
            const data = await response.json();
      
            const labels = data.map((item) => item.year.toString());
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
      
        const optionsFractions = {
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