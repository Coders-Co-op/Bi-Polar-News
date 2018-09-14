import React, { Component } from 'react'
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

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
                        labels: [
                            `# Who Voted ${articles[0].source} More Reasonable`,
                            `# Who Voted ${articles[1].source} More Reasonable`,
                            "# Surprised By News Source"
                        ],
                        datasets: [
                            {
                                label: "Votes for Articles",
                                data: [
                                    this.state.art1Count,
                                    this.state.art2Count,
                                    this.state.surprisedCount,

                                ],
                                backgroundColor: [
                                    articles[0].source.includes("CNN") ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)',
                                    articles[1].source.includes("CNN") ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    // 'rgba(255, 99, 132, 0.6)': 'rgba(54, 162, 235, 0.6)',
                                ],
                                borderWidth: 1,
                                hoverBorderWidth: 3,
                                borderColor: 'grey',
                                hoverBorderColor: 'black',
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
                            text: "The Results Are In...",
                            fontSize: 30,
                            fontColor: "black"
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                            labels:{
                                fontColor: 'black',
                                fontSize: 15
                            }

                        }
                    }}
                />
                <div>
                    <Link to='/articles-2'>
                        <button>Next Article</button>
                    </Link>
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
