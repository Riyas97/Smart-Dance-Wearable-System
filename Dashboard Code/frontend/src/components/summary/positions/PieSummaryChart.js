import React, { Component } from 'react';
import Chart from 'chart.js';

export default class PieSummaryChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    // how to resize canvas to div constraints: https://stackoverflow.com/questions/44070980/make-pie-chart-smaller-chart-js#:~:text=To%20make%20the%20pie%20chart,options%2C%20like%20so%20...&text=In%20var%20ctxPTD%20%3D%20%24(%22%23,height%20only%20like....
    // examples: https://dyclassroom.com/chartjs/how-to-create-a-pie-chart-using-chartjs , https://codepen.io/k3no/pen/dXAQOp
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
                labels: [`Total Correct`, `Total Incorrect`],
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
