import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export { default as StyledChart } from './ChartStyle';
export { default as useChart } from './useChart';

export default Chart;
