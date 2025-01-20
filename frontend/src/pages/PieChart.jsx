import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Регистрируем необходимые компоненты Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PieChart(props) {
  return <Pie data={props.chartData} options={props.options} />;
};