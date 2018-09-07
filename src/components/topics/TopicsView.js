import React, { Component } from 'react'
import axios from 'axios';
import './topics.css';
import { Link } from 'react-router-dom';

export default class Topics extends Component {
  constructor() {
    super()
    this.state ={
      topicsArray: []
    }
  }
  componentDidMount(){    
    let promise = axios.get('/api/topics/')
    promise.then(res => {  
      this.setState({     
        topicsArray: res.data
      })
      console.log("Data ",this.state.topicsArray)
    })
  }
  render() {
    const topicsArr = [...this.state.topicsArray];
    let extractedInfo = '';
    let topicName = '';
    let formattedList = topicsArr.map((e, i) => {
      if (topicName !== e.topic_name) {
        topicName = e.topic_name;
        return (
          <div key={ i }>
            <Link to="/articles"><h3>{topicName}</h3></Link>
          </div>
        )
      } else {
        return (
          <div key={i}><p>{e.subtopic_name}</p></div>
        )
      }
    })
    // var processOne = _.groupBy(topicsArr,"topic_name")
    // console.log("processOne",processOne)


     return (
      <div> 
        <h1>Topics</h1>
        {formattedList}
      </div>
    )
  }
}