import React, { Component } from 'react';
import Chart from 'chart.js';

export default class PieSummaryChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {

        this.myChart.data.datasets[0].data[0] = this.props.totalCorrect;
        this.myChart.data.datasets[0].data[1] = this.props.totalIncorrect;
        this.myChart.options.title.text = this.props.name;

        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            options: {
                responsive: false,
                title: {
                    text: this.props.name,
                    display: true,
                    fontFamily: 'Acme',
                    position: 'top',
                    fontColor: 'white'
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: 'white'
                    }
                },
                // circumference: 10 * Math.PI,
            },
            data: {
                labels: ["Total Correct", "Total Incorrect"],
                datasets: [
                    {
                        fill: true,
                        backgroundColor: [
                            'green',
                            'red'
                        ],
                        data: [
                            this.props.totalCorrect,
                            this.props.totalIncorrect
                        ],
                        borderColor: [
                            'green',
                            'red'
                        ],
                        borderWidth: [
                            2,
                            2
                        ]
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
