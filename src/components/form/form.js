import React, { Component } from 'react'
import './form.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class form extends Component {
  constructor(){
    super()
    this.state = {
      selectedOption: '',
      selectedOption2:''
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
  }
  handleFormSubmitTwo(formSubmitEvent){
    formSubmitEvent.preventDefault()
    console.log(`You have selected ${this.state.selectedOption2}`);
  }
  render() {
    console.log(this.props.articles);
    return (
      <div className='bg'>
        <form className='modal' onSubmit={(event)=> this.handleFormSubmit(event)}>
          <h3>Which article do you feel was More Reasonable?</h3>
          <div className='radio'>
            <label htmlFor="article1">
            Article 1
              <input name='article' value='article 1' type="radio" onChange={(event)=>this.handleRadio(event)} checked={this.state.selectedOption === 'article 1'}/>
            {
              this.state.selectedOption !== '' ? `${this.props.articles[0].source}` : null
            }
            </label>
          </div>
          <div className='radio'>
            <label htmlFor="article2">
            Article 2
              <input name='article' value='article 2' type="radio" onChange={(event)=>this.handleRadio(event)} checked={this.state.selectedOption === 'article 2'}/>
            {
              this.state.selectedOption !== '' ? `${this.props.articles[1].source}` : null
            }
            </label>
          </div>
          <button className='btn' type='submit'>Save</button>
        </form>
        {
          this.state.selectedOption !== '' 
          ?
          (
          <div>
            <form className='modal two' onSubmit={(event)=> this.handleFormSubmitTwo(event)}>
                <h3>Surprised?</h3>
                <div className='radio'>
                  <label htmlFor="yes">Yes
                    <input name='yesorno' value='yes' type="radio" onChange={(event)=>this.handleRadio2(event)} checked={this.state.selectedOption2 === 'yes'}/>
                  </label>
                </div>
                <div className='radio'>
                  <label htmlFor="no">No
                    <input name='yesorno' value='no' type="radio" onChange={(event)=>this.handleRadio2(event)} checked={this.state.selectedOption2 === 'no'}/>
                  </label>
                </div>
                <button type='submit'>Save</button>
            </form>
            <div className='center'>
              <button onClick={()=>this.props.closeModal()}>View Graph</button>
            </div>
          </div>  
          )
          :null
        }
      </div>
    )
  }
}
function mapState(state){
  let {articles} = state
  return{
    articles
  }
}
export default withRouter(connect(mapState)(form))