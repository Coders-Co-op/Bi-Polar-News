import React, { Component } from 'react'
import './form.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'


class form extends Component {
  constructor(){
    super()
    this.state = {
      selectedOption: '',
      selectedOption2:''
    }
  }
  addToPollData(){
    let { articles, indexArt1, indexArt2 } = this.props;
    if(this.state.selectedOption !== '' && this.state.selectedOption2 !== ''){
      let {selectedOption, selectedOption2} = this.state
      let surprised = selectedOption2
      let art1_id = articles[indexArt1].id
      let art2_id = articles[indexArt2].id
      if(selectedOption === 'article 1'){
        const art1_res = 1
        const art2_res = 0
        axios.post('/api/poll/submit', {art1_id,art2_id,art1_res,art2_res,surprised}).then(res=>{
          console.log(res.data);
        })
      }else if (selectedOption === 'article 2'){
        const art1_res = 0
        const art2_res = 1
        axios.post('/api/poll/submit', {art1_id,art2_id,art1_res,art2_res,surprised}).then(res=>{
          console.log(res.data);
        })
      }
    }
  }
  handleRadio(e){
    this.setState({selectedOption:e.target.value})
  }
  handleRadio2(e){
    this.setState({selectedOption2:e.target.value})
  }
  handleFormSubmit(formSubmitEvent){
    formSubmitEvent.preventDefault()
    console.log(`You have selected ${this.state.selectedOption}`);
    console.log(`You have selected ${this.state.selectedOption2}`);
  }
  render() {
    let { articles, indexArt1, indexArt2 } = this.props;
    return (
      <div className='bg'>
        <form className='modal' onSubmit={(event)=> this.handleFormSubmit(event)}>
          <h3 className='margintop'>Which article do you feel was More Reasonable?</h3>
          <div className='radio'>
            <label htmlFor="article1">
              <p>
                {this.props.articles[0].title}<br/>
              </p> 
              <input className='center' name='article' value='article 1' type="radio" onChange={(event)=>this.handleRadio(event)} checked={this.state.selectedOption === 'article 1'}/>
            {
              this.state.selectedOption !== '' ? 
              <h3 className='source'>
              News Source: {articles[indexArt1].source}
              </h3> 
                : null
            }
            </label>
          </div>
          <div className='radio'>
            <label htmlFor="article2">
            <p>
              {this.props.articles[1].title}<br/>         
            </p>
              <input className='center' name='article' value='article 2' type="radio" onChange={(event)=>this.handleRadio(event)} checked={this.state.selectedOption === 'article 2'}/>
            {
              this.state.selectedOption !== '' ? 
              <h3 className='source'>
              News Source:{articles[indexArt2].source}
              </h3>
              : null
            }
            </label>
          </div>
            {
              this.state.selectedOption !== '' 
              ? 
              (<div className='center'>
                <h3 className='fontweight'>Does the new source you selected surprise you?</h3>
                <div className='radio' id='radiopad'>
                  <label htmlFor="yes">Yes
                    <input name='yesorno' value='true' type="radio" onChange={(event)=>this.handleRadio2(event)} checked={this.state.selectedOption2 === 'true'}/>
                  </label>
                </div>
                <div className='radio'>
                  <label htmlFor="no">No
                    <input name='yesorno' value='false' type="radio" onChange={(event)=>this.handleRadio2(event)} checked={this.state.selectedOption2 === 'false'}/>
                  </label>
                </div>
                <button className='btn' type='submit' onClick={()=>this.addToPollData()}>Vote</button>
              </div>)
              :null
            }
            </form>
            <div className='center'>
              <button onClick={()=>this.props.closeModal()}>View Votes</button>
            </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    articles: state.articles,
    indexArt1: state.indexArt1,
    indexArt2: state.indexArt2
  };
}
export default withRouter(connect(mapStateToProps)(form))