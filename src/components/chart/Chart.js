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
        //Returns the count of how many people selected "article 1" as more reasonable than "article 2"
        axios.get(`/api/poll/results?art1_id=${articles[0].id}&&art2_id=${articles[1].id}&&art1_res=1`).then(res => {
            this.setState({ art1Count: Number(res.data[0].count) });
            //Returns the count of how many people selected "article 2" as more reasonable than "article 1"
            axios.get(`/api/poll/results?art1_id=${articles[0].id}&&art2_id=${articles[1].id}&&art1_res=0`).then(res => {
                this.setState({ art2Count: Number(res.data[0].count) });
                //Return the overall count of how many people were surprised about the news source
                axios.get(`/api/poll/results/suprised?art1_id=${articles[0].id}&&art2_id=${articles[1].id}`).then(res => {
                    this.setState({ surprisedCount: Number(res.data[0].count) });

                    this.setState({
                        chartData: {
                            labels: [this.props.articles[0].source, this.props.articles[1].source, "Surprised"],
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
                                        this.props.articles[0].source === "CNN" ? 'rgba(54, 162, 235, 0.6)': 'rgba(255, 99, 132, 0.6)',
                                        this.props.articles[1].source === "CNN"? 'rgba(54, 162, 235, 0.6)': 'rgba(255, 99, 132, 0.6)',
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
                <Bar
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
