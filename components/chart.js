import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Chart({ data }) {
    const chartData = {
        series: [{
            data: data
        }],
        options: {
            title: {
                text: "Statistique générale ",
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '25px',
                    fontWeight: '200',
                    fontFamily: 'inherit',
                    color: 'white',
                },
            },
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            colors: ['#770099', '#A1007E', '#F00082', '#Ef005A'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    ["Nb d'actes"],
                    ["Nb de vacation"],
                    ["Nb de consultations"],
                    ["Nb d'examens"],
                ],
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        },
    };

    return (
        <ReactApexChart width={700} options={chartData.options} series={chartData.series} type="bar" height={350} />
    )
}
