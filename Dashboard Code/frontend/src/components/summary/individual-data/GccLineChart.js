import React, { Component } from 'react';
import Chart from 'chart.js';

export default class GCCLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    
    componentDidUpdate() {
        this.myChart.data.labels = this.props.timestamp;
        this.myChart.data.datasets[0].data = this.props.gccx;
        this.myChart.data.datasets[1].data = this.props.gccy;
        this.myChart.data.datasets[2].data = this.props.gccz;

        this.myChart.update();
    }
    componentDidMount() {
        // console.log(this.props.data.map(d => d.timestamp));
        this.myChart = new Chart(this.chartRef.current, {
            type: 'line',
            options: {
                animation: {
                    duration: 0,
                },
                hover: {
                    animationDuration: 0,
                },
                responsiveAnimationDuration: 0,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {   
                            display: false,
                            ticks: {
                                display: false,
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: -150,
                                max: 150,
                                fontColor: 'white'
                                // suggestedMax: 180,
                                // suggestedMin: -180
                            },
                            gridLines: {
                                zeroLineColor: 'white'
                            }
                        }
                    ]
                },
                title: {
                    text: 'Gyroscope X, Y & Z against Time',
                    display: true,
                    fontFamily: 'Acme',
                    position: 'bottom',
                    fontColor: 'white'
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: 'white'
                    }
                },
                // elements: {
                //     line: {
                //         tension: 0
                //     },
                //     point: {
                //         radius: 0
                //     }
                // }
            },
            data: {
                labels: this.props.timestamp,
                datasets: [{
                    label: 'Gcc X',
                    data: this.props.gccx,
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'red'              
                }, {
                    label: 'Gcc Y',
                    data: this.props.gccy,
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }, {
                    label: 'Gcc Z',
                    data: this.props.gccz,
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'green'
                }]
            }

        })
    }
    // <canvas ref={this.chartRef} />
    render() {
        return <canvas ref={this.chartRef}/>
    }
}
