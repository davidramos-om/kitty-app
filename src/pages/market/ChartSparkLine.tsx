import ReactApexChart from 'react-apexcharts';
import merge from 'lodash/merge';

import { BaseOptionChart } from "src/components/chart";
import { fNumber } from "src/utils/formatNumber";

type Props = {
    chartColor: string;
    chartData: number[];
}

function ChartSparkLine({ chartColor, chartData }: Props) {

    const chartOptions = merge(BaseOptionChart(), {
        colors: [ chartColor ],
        chart: { animations: { enabled: true }, sparkline: { enabled: true } },
        stroke: { width: 2 },
        tooltip: {
            x: { show: false },
            y: {
                formatter: (seriesName: string) => fNumber(seriesName),
                title: {
                    formatter: () => '',
                },
            },
            marker: { show: false },
        },
    });

    return (
        <ReactApexChart
            type="line"
            series={[ { data: chartData } ]}
            options={chartOptions}
            width={120}
            height={80} />
    );
}

export default ChartSparkLine;
