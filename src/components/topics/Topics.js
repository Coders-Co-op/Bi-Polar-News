import React, { Component } from 'react'
import axios from 'axios';
import './topics.css';
import {connect} from 'react-redux'
import {getFiveArticles} from '../../ducks/reducer';




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

  handleClick(redcat){
    console.log("redcat = ", redcat)
    const { getFiveArticles, history } = this.props;
        axios.get(`/api/article/${redcat}`).then( res => { //${redcat
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
          <div className="topics-wrapper"key={ i }>
             <div className={e.topic_name==="politics"? "politics-wrap": e.topic_name==="legal"? "legal-wrap": e.topic_name==="business"? "business-wrap": e.topic_name==="education"? "education-wrap": "social-wrap"}onClick={() => this.handleClick(e.topic_name)}><h3> {topicName.toProperCase()}</h3></div> 
          </div>
        )
      } else {
        return null        
      }
    })

      return (
        <section>
          <div className = "card-box"> 
           
            <div>{formattedList}</div>
            {/* <div className="topics-wrapper">
            <div className="politics-wrap"> Politics</div>
            <div className="legal-wrap"> Legal</div>
            <div className="business-wrap"> Business</div>
            <div className="education-wrap"> Education</div>
            <div className="social-wrap">Social </div>
            
            </div> */}

          </div>
      </section>
    )
  }
}
export default connect(null,{getFiveArticles})(Topics)