import React, { Component } from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-streaming';
let i = 0;

export default class AccLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        i += 1;
        // console.log(`acc ${i}`);

        if (this.myChart.data.datasets[0].data.length < 200) {
            this.myChart.data.labels.push(this.props.data.timestamp);
            this.myChart.data.datasets[0].data.push(this.props.data.accx);
            this.myChart.data.datasets[1].data.push(this.props.data.accy);
            this.myChart.data.datasets[2].data.push(this.props.data.accz);
        } else if (this.myChart.data.datasets[0].data.length === 200) {
            this.myChart.data.labels.shift();
            this.myChart.data.datasets[0].data.shift();
            this.myChart.data.datasets[1].data.shift();
            this.myChart.data.datasets[2].data.shift();

            this.myChart.data.labels.push(this.props.data.timestamp);
            this.myChart.data.datasets[0].data.push(this.props.data.accx);
            this.myChart.data.datasets[1].data.push(this.props.data.accy);
            this.myChart.data.datasets[2].data.push(this.props.data.accz);
        }
        
        this.myChart.update({
            duration: 0
        });
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
                aspectRatio: 2.75,
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
                labels: [],
                datasets: [{
                    label: 'Acc X',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'hsl(62, 100%, 69%)',
                    backgroundColor: 'hsl(62, 100%, 69%)'              
                }, {
                    label: 'Acc Y',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'hsl(171, 100%, 69%)',
                    backgroundColor: 'hsl(171, 100%, 69%)'
                }, {
                    label: 'Acc Z',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'hsl(0, 100%, 85%)',
                    backgroundColor: 'hsl(0, 100%, 85%)'
                }]
            }

        })
    }
    // <canvas ref={this.chartRef} />
    render() {
        return <canvas ref={this.chartRef}/>
    }
}
