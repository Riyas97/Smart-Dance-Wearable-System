import React, { Component } from 'react';
import Chart from 'chart.js';

export default class PieStatsChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {

        this.myChart.data.datasets[0].data[0] = this.props.correctMove;
        this.myChart.data.datasets[0].data[1] = this.props.incorrectMove1;
        this.myChart.data.datasets[0].data[2] = this.props.incorrectMove2;
        this.myChart.data.datasets[0].data[3] = this.props.incorrectMove3;
        this.myChart.data.datasets[0].data[4] = this.props.incorrectMove4;
        this.myChart.data.datasets[0].data[5] = this.props.incorrectMove5;
        this.myChart.data.datasets[0].data[6] = this.props.incorrectMove6;
        this.myChart.data.datasets[0].data[7] = this.props.incorrectMove7;

        this.myChart.data.labels[0] = this.props.correctMoveName;
        this.myChart.data.labels[1] = this.props.incorrectMoveName1;
        this.myChart.data.labels[2] = this.props.incorrectMoveName2;
        this.myChart.data.labels[3] = this.props.incorrectMoveName3;
        this.myChart.data.labels[4] = this.props.incorrectMoveName4;
        this.myChart.data.labels[5] = this.props.incorrectMoveName5;
        this.myChart.data.labels[6] = this.props.incorrectMoveName6;
        this.myChart.data.labels[7] = this.props.incorrectMoveName7;

        this.myChart.options.title.text = this.props.correctMoveName;

        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    text: this.props.correctMoveName,
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
                labels: [this.props.correctMoveName,
                    this.props.incorrectMoveName1,
                    this.props.incorrectMoveName2,
                    this.props.incorrectMoveName3,
                    this.props.incorrectMoveName4,
                    this.props.incorrectMoveName5,
                    this.props.incorrectMoveName6,
                    this.props.incorrectMoveName7],
                datasets: [
                    {
                        fill: true,
                        backgroundColor: [
                            '#003f5c',
                            '#2f4b7c',
                            '#665191',
                            '#a05195',
                            '#d45087',
                            '#f95d6a',
                            '#ff7c43',
                            '#ffa600'
                        ],
                        data: [
                            this.props.correctMove,
                            this.props.incorrectMove1,
                            this.props.incorrectMove2,
                            this.props.incorrectMove3,
                            this.props.incorrectMove4,
                            this.props.incorrectMove5,
                            this.props.incorrectMove6,
                            this.props.incorrectMove7
                        ],
                        borderColor: [
                            '#003f5c',
                            '#2f4b7c',
                            '#665191',
                            '#a05195',
                            '#d45087',
                            '#f95d6a',
                            '#ff7c43',
                            '#ffa600'
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
