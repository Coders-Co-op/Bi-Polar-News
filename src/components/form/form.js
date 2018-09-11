import React, { Component } from 'react'

export default class form extends Component {
  render() {
    return (
      <div>
        <form className='modal'>
          <p>Which article do you feel was More Reasonable</p>
          <label htmlFor="article1">Article 1</label>
          <input name='article' value='article1' type="radio"/>
          <label htmlFor="article2">Article 2</label>
          <input name='article' value='article2' type="radio"/>
        </form>
        <form className='modal two'>
            <p>Surprised</p>
            <label htmlFor="yes">Yes</label>
            <input name='yesorno' value='yes' type="radio"/>
            <label htmlFor="no">No</label>
            <input name='yesorno' value='no' type="radio"/>
            <button onClick={()=>this.props.closeModal()}>Close/Next</button>
        </form>
      </div>
    )
  }
}
