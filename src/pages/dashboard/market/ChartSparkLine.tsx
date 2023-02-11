import { ApexOptions } from "apexcharts";

import Chart, { useChart } from 'src/components/chart';
import { fNumber } from "src/utils/formatNumber";

type Props = {
    chartColor: string;
    chartData: number[];
    options?: ApexOptions;
}

function ChartSparkLine({ chartColor, chartData,options }: Props) {


    const chartOptions = useChart({
        colors:[chartColor],
        chart: {
          animations: {
            enabled: true,
          },
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          width: 2,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            formatter: (value: number) => fNumber(value),
            title: {
              formatter: () => '',
            },
          },
          marker: {
            show: false,
          },
        },
        ...options,
    });
    
    return (
        <Chart
            type="line"
            series={[ { data: chartData } ]}
            options={chartOptions}
            width={120}
            height={80}
        />
    );
}

export default ChartSparkLine;
