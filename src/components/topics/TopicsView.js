import React, { Component } from 'react'
import axios from 'axios';
import './topics.css';
import {connect} from 'react-redux'
import {getFiveArticles} from '../../ducks/reducer'
import './topics.jpg';

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
    })
  }
  handleClick(topic){
    const { getFiveArticles, history } = this.props;
        axios.get(`/api/article/${topic}`).then( res => { 
          getFiveArticles(res.data)
          history.push('/articles')
        })
      }


  render() {

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    const topicsArr = [...this.state.topicsArray];
    let topicName = '';
    let formattedList = topicsArr.map((e, i) => {
      if (topicName !== e.topic_name) {
        topicName = e.topic_name;
        return (
          <div key={ i }>
            <h3 onClick={() => this.handleClick(e.topic_name)}><u>{topicName.toProperCase()}</u></h3>  
          </div>
        )
      } else {
        return (
          <div key={i}><p>{e.subtopic_name.toProperCase()}</p></div>
        )
      }
    })
  


      return (
        <section>
          <div className = "card-box"> 
            <div>
              <h1>Select a topic</h1></div>
            <p>{formattedList}</p>
          </div>
      </section>
    )
  }
}
export default connect(null,{getFiveArticles})(Topics)