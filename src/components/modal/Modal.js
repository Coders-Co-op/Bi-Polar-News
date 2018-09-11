
import React, { Component } from 'react'
import ReactModal from 'react-modal'

export default class Modal extends Component {
  constructor(){
    super()
    this.state = {
      modal:false
    }
  }
  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.modal}
        >

        </ReactModal>
        <h1>Modal</h1>
      </div>
    )
  }
}
