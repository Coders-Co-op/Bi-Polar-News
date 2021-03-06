import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Form from '../form/form'
import Chart from "../chart/Chart";
import './modal.css'

const modalStyles = {
  content:{
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '90%',
    height                : '80%',
    borderRadius          : '10px',
    boxShadow             : '0px 5px 3px 2px rgba(190,200,200,0.5)',
    background            : 'linear-gradient(rgba(65,105,225,.3),rgba(220,20,60,.3))',
    border                : '2px solid rgb(130,130,130)',
  
  },
  overlay:{
    background            : 'rgb(216,216,216)'
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
        onRequestClose={()=>this.props.closeModal()}
        style={modalStyles}
        contentLabel='modalstyle'
        >
        <i class="fa fa-times" onClick={()=>this.props.closeSingleModal()}></i>        
          <Form closeModal={() => this.props.closeModal()} />
        </ReactModal>
        <ReactModal
          isOpen={this.props.graphModal}
          onRequestClose={() => this.props.closeGraphModal()}
          style={modalStyles}
        >
        <i class="fa fa-times" onClick={()=>this.props.closeGraphModal()}></i>        
          <Chart closeGraphModal={()=>this.props.closeGraphModal()} />
        </ReactModal>
      </div>
    )
  }
}
