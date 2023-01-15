import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Bar() {
    const stateInit = {
        series: [120],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70',
                    }
                },
            },
            labels: ['% Vacciation'],
        },
    };
    const [barData, setBarData] = useState(stateInit);

    return (
        <ReactApexChart options={barData.options} series={barData.series} type="radialBar" height={250} width={250} />
    )
}
