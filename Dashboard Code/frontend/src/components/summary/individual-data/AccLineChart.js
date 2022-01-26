import React, { Component } from 'react';
import Chart from 'chart.js';

export default class AccLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        // console.log('ACC POST DATA 2', this.props);
        this.myChart.data.labels = this.props.timestamp;
        this.myChart.data.datasets[0].data = this.props.accx;
        this.myChart.data.datasets[1].data = this.props.accy;
        this.myChart.data.datasets[2].data = this.props.accz;

        this.myChart.update();
    }

    componentDidMount() {
        // console.log('ACC POST DATA 1', this.props);
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
                                min: -15000,
                                max: 15000,
                                fontColor: 'white'
                                // suggestedMax: 2,
                                // suggestedMin: -2,
                            },
                            gridLines: {
                                zeroLineColor: 'white'
                            }
                        }
                    ]
                },
                title: {
                    text: 'Acceleration X, Y and Z against Time',
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
                    label: 'Acc X',
                    data: this.props.accx,
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'red'              
                }, {
                    label: 'Acc Y',
                    data: this.props.accy,
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }, {
                    label: 'Acc Z',
                    data: this.props.accz,
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
