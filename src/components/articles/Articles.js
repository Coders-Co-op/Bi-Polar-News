import React, { Component } from "react";
import { connect } from "react-redux";
import { getFiveArticles } from "../../ducks/reducer";
import {
  Accordion, AccordionItem, AccordionItemTitle,AccordionItemBody} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ReplaceSource from '../ReplaceSource'
import './article.css'
import Modal from 'react-modal'

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
    background            : 'linear-gradient(red,orange,yellow,blue)'
  }
}


class Articles extends Component {
  constructor(){
    super()
    this.state = {
      modal:false,
      graphModal:false
    }
  }
  openModal(){
    this.setState({modal:true})
  }
  closeModal(){
    this.setState({modal:false})
    this.openGraphModal()
  }
  openGraphModal(){
    this.setState({graphModal:true})
  }
  closeGraphModal(){
    this.setState({graphModal:false})
  }
  render() {
    const newArticle = this.props.articles.map((article, i) => (
      <div key={i}>
        <h3> {article.title}</h3>
        <article> <ReplaceSource content = {article.article_body} source = {article.source} /> </article>
      </div>
    ));

    return (
      <div className='accordian_style'>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
                <h3>First Article</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>This is article 1</p>              
                {newArticle[0]}              
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
          <AccordionItemTitle>
                <h3>Second Article</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>this is article 2</p>
              {newArticle[1]}
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
        <i className='arrow right' onClick={()=>this.openModal()}></i>
        <Modal
        isOpen={this.state.modal}
        onRequestClose={()=>this.closeModal()}
        style={modalStyles}
        >
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
            <button onClick={()=>this.closeModal()}>Close/Next</button>
        </form>
        </Modal>
        <Modal
        isOpen={this.state.graphModal}
        onRequestClose={()=>this.closeGraphModal()}
        style={modalStyles}
        >
        <h1>Graph Modal</h1>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}
export default connect(
  mapStateToProps,
  { getFiveArticles }
)(Articles);
