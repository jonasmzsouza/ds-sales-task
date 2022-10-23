import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

const PieChart = ({ labels = [], name, series = [] }: Props) => {
  return (
    <div className="pie-chart-container">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        series={series}
        height={350}
      />
    </div>
  );
};

export default PieChart;
