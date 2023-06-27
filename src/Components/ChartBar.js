import React from 'react'
import Chart from 'react-apexcharts';
const ChartBar = () => {
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
                            name: "Social Media Subscriber",
                            data: [6578, 6787, 3245, 2324, 5123, 2345]
                        }
                    ]}

                    options={ {

                        title:{ 
                            text:"BarChar Developed by DevOps Team",
                            style: {fontSize: 30},
                        },
                        colors:['#f90000'],
                        theme:{mode: 'light'},
                        style:{ fontSize: 30},

                        subtitle: {
                            text:"This is BarChart 6",
                            style:{ fontSize: 20}
                        },
                        xaxis:{
                            tickPlacement:'on',
                            categories:['Facebook', 'twitter', 'Linkedin','instagram','github','stackedoverflow','Youtube'],
                            title:{
                                text:'Social media user',
                                style:{color:"#f90000", fontSize:30}
                            },
                        },

                        yaxis:{
                            labels:{
                                formatter:(val)=>{ return `$${val}`},
                                style:{
                                    fontSize: '10',
                                    colors:['#f90000']}
                            },
                            title:{
                                text:"User In K",
                                style:{ color:"#f90000"}
                            }
                        },

                        legend:{
                            show:true,
                            position: "left"
                        },
                        dataLabels:{
                            formatter:(val)=>{ return `$${val}`},
                            style:{
                                colors:['#f4f4f4'],
                                fontSize: 20
                            }
                        }
                        
                    }}
                    

                >

                </Chart>

            </div>
        </React.Fragment>
    )
}

export default ChartBar