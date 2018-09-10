import React, { Component } from 'react'
import axios from 'axios';
import './topics.css';
import {connect} from 'react-redux'
import {getFiveArticles} from '../../ducks/reducer'

class Topics extends Component {
  constructor() {
    super()
    this.state ={
      topicsArray: []
    }
  }
  componentDidMount(){    
    let promise = axios.get('/api/alltopics')
    promise.then(res => {  
      this.setState({     
        topicsArray: res.data
      })
      console.log("Data ",this.state.topicsArray)
    })
  }
  handleClick(redcat){
    console.log("redcat = ", redcat)
    const { getFiveArticles, history } = this.props;
        axios.get(`/api/article/${redcat}`).then( res => { //${redcat
          getFiveArticles(res.data)
          console.log('res', res.data)
          history.push('/article')
        })
      }
  render() {
    const topicsArr = [...this.state.topicsArray];
    let topicName = '';
    let formattedList = topicsArr.map((e, i) => {
      if (topicName !== e.topic_name) {
        topicName = e.topic_name;
        return (
          <div key={ i }>
            <h3 onClick={() => this.handleClick(e.topic_name)}>{topicName}</h3>  
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
export default connect(null,{getFiveArticles})(Topics)