import React, { Component } from 'react'
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
    constructor() {
        super();

        this.state = {
            chartData: {},
            art1Count: 0,
            art2Count: 0,
            surprisedCount: 0
        }
    }

    componentDidMount() {
        let { articles } = this.props;
        axios.get(`/api/poll/results?art1_id=${articles[0].id}&&art2_id=${articles[1].id}`)
            .then(res => {
                this.setState({
                    art1Count: res.data.art1Count,
                    art2Count: res.data.art2Count,
                    surprisedCount: res.data.surprisedCount,
                })
                this.setState({
                    chartData: {
                        labels: [articles[0].source, articles[1].source, "Surprised"],
                        datasets: [
                            {
                                label: "Votes for Articles",
                                data: [
                                    this.state.art1Count,
                                    this.state.art2Count,
                                    this.state.surprisedCount,
                                    0
                                ],
                                backgroundColor: [
                                    articles[0].source === "CNN" ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)',
                                    articles[1].source === "CNN" ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    // 'rgba(255, 99, 132, 0.6)': 'rgba(54, 162, 235, 0.6)',
                                ],
                                borderWidth: 1,
                                hoverBorderWidth: 3,
                                borderColor: 'grey',
                                hoverBorderColor: 'black'
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }

                    }
                })
            })
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }

    render() {
        return (
            <div>
                <Pie
                    data={this.state.chartData}
                    width={400}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: "Votes for Articles",
                            fontSize: 20,
                            fontColor: "black"
                        },
                        legend: {
                            dispaly: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
                <div>
                    <button>Next Article</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Chart);
