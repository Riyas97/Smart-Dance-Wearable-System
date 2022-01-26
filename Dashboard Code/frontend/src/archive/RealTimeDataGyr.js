import React, { Component } from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-streaming';
import { ThemeConsumer } from 'styled-components';
let i = 0;

export default class YPRLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    onRefresh = (chart) => {
        i += 1;
        console.log(`macha ${i}: `, JSON.stringify(this.props.data.length));
        const data = this.props.data[this.props.data.length - 1]
        chart.data.datasets[0].data.push({
            x: i,
            y: data.yaw
        });
        chart.data.datasets[1].data.push({
            x: i,
            y: data.pitch
        });
        chart.data.datasets[2].data.push({
            x: i,
            y: data.roll
        })
        console.log('chart ', chart.data.datasets[0].data);

    }
    // componentDidUpdate() {
    //     // this.myChart.data.labels = this.props.data.map(d => d.timestamp);
    //     // this.myChart.data.datasets[0].data = this.props.data.map(d => d.accx);
    //     // this.myChart.data.datasets[1].data = this.props.data.map(d => d.accy);
    //     // this.myChart.data.datasets[2].data = this.props.data.map(d => d.accz);

    //     this.myChart.data.labels.push(this.props.data.timestamp);
    //     this.myChart.data.datasets[0].data.push(this.props.data.accx);
    //     this.myChart.data.datasets[1].data.push(this.props.data.accy);
    //     this.myChart.data.datasets[2].data.push(this.props.data.accz);
    //     this.myChart.update();

    //     // setInterval(() => {
    //     //     i += 1;
    //     //     console.log(`Updated for the ${i}`);
    //     //     return this.myChart.update()
    //     // }, 1000)

    //     // setInterval(this.myChart.update(), 100);
    // }

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
                            type: 'realtime',
                            realtime: {
                                duration: 60000,
                                ttl: undefined,
                                delay: 0,
                                refresh: 50,
                                pause: false,
                                onRefresh: this.onRefresh
                            },
                            display: false,
                            ticks: {
                                display: false,
                            }
                        }
                    ],
                    yAxes: [
                        {
                            type: 'linear',
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'value',
                            },
                            ticks: {
                                suggestedMax: 2,
                                suggestedMin: -2,
                            },
                        }
                    ]
                },
                plugins: {
                    streaming: {
                        frameRate: 30,
                    }
                },
                title: {
                    text: 'Yaw, Pitch & Roll against Time',
                    display: true,
                    fontFamily: 'Acme',
                    position: 'bottom'
                },
                legend: {
                    position: 'right',
                },
            },
            data: {
                datasets: [{
                    label: 'Yaw',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'red'              
                }, {
                    label: 'Pitch',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }, {
                    label: 'Roll',
                    data: [],
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
