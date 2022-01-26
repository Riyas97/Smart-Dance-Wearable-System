import React, { Component } from 'react';
import Chart from 'chart.js';

export default class PieStatsChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {

        this.myChart.data.datasets[0].data[0] = this.props.position1;
        this.myChart.data.datasets[0].data[1] = this.props.position2;
        this.myChart.data.datasets[0].data[2] = this.props.position3;

        this.myChart.options.title.text = this.props.currentTrainee;

        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    text: this.props.currentTrainee,
                    display: true,
                    fontFamily: 'Acme',
                    position: 'top',
                    fontColor: 'white'
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: 'white'
                    }
                },
                // circumference: 10 * Math.PI,
            },
            data: {
                labels: ['Position 1', 'Position 2', 'Position 3'],
                datasets: [
                    {
                        fill: true,
                        backgroundColor: [
                            '#003f5c',
                            '#bc5090',
                            '#ffa600',
                        ],
                        data: [
                            this.props.position1,
                            this.props.position2,
                            this.props.position3,
                        ],
                        borderColor: [
                            '#003f5c',
                            '#bc5090',
                            '#ffa600',
                        ],
                        // borderWidth: [
                        //     0.3,
                        //     0.3,
                        //     0.3,
                        //     0.3,
                        //     0.3,
                        //     0.3,
                        //     0.3,
                        //     0.3
                        // ]
                    }
                ]
            }
        })
    }
    // <canvas ref={this.chartRef} />
    render() {
        return <canvas ref={this.chartRef}/>
    }
}
