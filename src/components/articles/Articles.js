import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getFiveArticles, updateIndexArt1AndIndexArt2 } from "../../ducks/reducer";
import {
  Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ReplaceSource from '../ReplaceSource'
import Modal from '../modal/Modal'
import './article.css'


class Articles extends Component {
  constructor() {
    super()
    this.state = {
      modal: false,
      graphModal: false
    }
  }
  componentDidMount() {
    const { articles, getFiveArticles } = this.props;
    if (articles.length === 0) {
      axios.get("/api/onload").then(res => {
        getFiveArticles(res.data);
      });
    }
  }
  openModal() {
    this.setState({ modal: true })
  }
  closeModal() {
    this.setState({ modal: false })
    this.openGraphModal()
  }
  closeSingleModal(){
    this.setState({modal:false})
  }
  openGraphModal(){
    this.setState({graphModal:true})
  }
  closeGraphModal() {
    this.setState({ graphModal: false })
  }
  render() {
    const { articles, indexArt1, indexArt2, updateIndexArt1AndIndexArt2 } = this.props;
    let index1 = Math.floor(Math.random() * 2);
    let index2 = index1 === 0 ? 1 : 0;
    updateIndexArt1AndIndexArt2(index1, index2);
    const newArticle = articles
      .map((article, i) => (
        <div key={i}>
          <article> <ReplaceSource content={article.article_body} source={article.source} /> </article>
        </div>
      ));

    return (
      articles[0] ? (
        <div className='accordian_style'>
          <i className='arrow right' onClick={() => this.openModal()}></i>
          <Accordion>
            <AccordionItem>
              <AccordionItemTitle>
                <h3>{articles[indexArt1].title}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                {newArticle[indexArt1]}
              </AccordionItemBody>
            </AccordionItem>
            <AccordionItem expanded>
              <AccordionItemTitle>
                <h3>{articles[indexArt2].title}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                {newArticle[indexArt2]}
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
          <Modal
            modal={this.state.modal}
            closeModal={() => this.closeModal()}
            graphModal={this.state.graphModal}
            closeGraphModal={() => this.closeGraphModal()}
            closeSingleModal={()=>this.closeSingleModal()}
          />
        </div>
      ) : null
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    indexArt1: state.indexArt1,
    indexArt2: state.indexArt2
  };
}
export default connect(
  mapStateToProps,
  { getFiveArticles, updateIndexArt1AndIndexArt2 }
)(Articles);
