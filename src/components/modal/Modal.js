import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Form from '../form/form'
import Chart from "../chart/Chart";

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '80%',
    borderRadius: '10px',
    boxShadow: '0px 5px 3px 2px rgba(190,200,200,0.5)',
    // background: 'linear-gradient(red,orange,yellow,blue)'
    background: 'white'
  }
}


export default class Modal extends Component {
  componentWillMount() {
    ReactModal.setAppElement('body')
  }
  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.modal}
          onRequestClose={() => this.props.closeModal()}
          style={modalStyles}
        >
          <Form closeModal={() => this.props.closeModal()} />
        </ReactModal>
        <ReactModal
          isOpen={this.props.graphModal}
          onRequestClose={() => this.props.closeGraphModal()}
          style={modalStyles}
        >
          <h1>Graph Modal</h1>
          <Chart />
        </ReactModal>
      </div>
    )
  }
}
