import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getFiveArticles } from "../../ducks/reducer";
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
  openGraphModal() {
    this.setState({ graphModal: true })
  }
  closeGraphModal() {
    this.setState({ graphModal: false })
  }
  render() {
    const { articles } = this.props;
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
                <h3>{articles[0].title}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                {newArticle[0]}
              </AccordionItemBody>
            </AccordionItem>
            <AccordionItem expanded>
              <AccordionItemTitle>
                <h3>{articles[1].title}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                {newArticle[1]}
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
          <Modal
            modal={this.state.modal}
            closeModal={() => this.closeModal()}
            graphModal={this.state.graphModal}
            closeGraphModal={() => this.closeGraphModal()}
          />
        </div>
      ) : null
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
