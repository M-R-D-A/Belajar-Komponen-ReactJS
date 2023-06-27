import React from 'react';
import Chart from 'react-apexcharts';

const ChartBar = () => {

    var options = {
        series: [
            {
                name: 'Kurang',
                data: [44, 55, 57, 56, 61, 58, 63,],
                color: '#FF6A81'
            },
            {
                name: 'Sedang',
                data: [76, 85, 101, 98, 87, 105, 91,],
                color: '#6CE1AE'
            },
            {
                name: 'Cukup Baik',
                data: [35, 41, 36, 26, 45, 83, 52,],
                color: '#48B8F1'
            },
            {
                name: 'Baik',
                data: [35, 41, 36, 26, 45, 48, 52,],
                color: '#BC5EF6'
            },
            {
                name: 'Memuaskan',
                data: [35, 41, 36, 26, 55, 48, 52,],
                color: '#FB934E'
            },
            {
                name: 'Sangat Memuaskan',
                data: [35, 41, 36, 26, 45, 78, 52,],
                color: '#E9E059'
            },
        ],
    };
    return (
        <React.Fragment>
            <div>ChartBar</div>
            <div className='container-fluid mb-5 containerht'>
                <h3 className='text-center mt-b3'>Bar Chart In ReactJS</h3>

                <Chart
                    type='bar'
                    width={1380}
                    height={700}
                    series={[
                        {
                            name: 'Kurang',
                            data: [44, 55, 57, 56, 61, 58, 63,],
                            color: '#FF6A81'
                        },
                        {
                            name: 'Sedang',
                            data: [76, 85, 101, 98, 87, 105, 91,],
                            color: '#6CE1AE'
                        },
                        {
                            name: 'Cukup Baik',
                            data: [35, 41, 36, 26, 45, 83, 52,],
                            color: '#48B8F1'
                        },
                        {
                            name: 'Baik',
                            data: [35, 41, 36, 26, 45, 48, 52,],
                            color: '#BC5EF6'
                        },
                        {
                            name: 'Memuaskan',
                            data: [35, 41, 36, 26, 55, 48, 52,],
                            color: '#FB934E'
                        },
                        {
                            name: 'Sangat Memuaskan',
                            data: [35, 41, 36, 26, 45, 78, 52,],
                            color: '#E9E059'
                        },
                    ]}
                    options={{
                        title: {
                            text: 'Statistik Cabang Jatim',
                            style: { fontSize: 20 },
                        },
                        theme: { mode: 'dark' },
                        xaxis: {
                            categories: [
                                'Keshan',
                                'Senam',
                                'Jurus',
                                'Fisik',
                                'Teknik',
                                'Sambung',
                                'Rata - rata',
                            ],
                            title: {
                                text: 'UKT',
                                style: { color: '#FFFFFF', fontSize: 30 },
                            },
                        },
                        yaxis: {
                            labels: {
                                formatter: (val) => {
                                    return `$${val}`;
                                },
                                style: {
                                    fontSize: '10',
                                    colors: ['#FFFFFF'],
                                },
                            },
                            title: {
                                text: 'User In K',
                                style: { color: '#FFFFFF' },
                            },
                        },
                        legend: {
                            show: true,
                            position: 'left',
                        },
                        dataLabels: {
                            formatter: (val) => {
                                return `${val}%`;
                            },
                            style: {
                                colors: ['#f4f4f4'],
                                fontSize: 15,
                            },
                        },
                    }}
                />
            </div>
        </React.Fragment>
    );
};

export default ChartBar;
