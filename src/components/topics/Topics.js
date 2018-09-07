import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getFiveArticles } from '../../ducks/reducer';



 class Topics extends Component {
  componentDidMount(topics){
const { getFiveArticles } = this.props;
    axios.get(`/api/article/politics`).then( res => {
      console.log('test response', res.data)
      getFiveArticles(res.data)
    })
  }
  render() {

     return (
      <div> 
        <h1>Topics</h1>

      </div>
    )
  }
}
export default connect(null, { getFiveArticles })(Topics)