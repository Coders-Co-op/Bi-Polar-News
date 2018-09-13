import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
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
    const { articles } = this.props;
    if (articles.length === 0) {
      axios.get("/api/onload").then(res => {
        this.styleArticles(res.data)
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
  closeSingleModal() {
    this.setState({ modal: false })
  }
  openGraphModal() {
    this.setState({ graphModal: true })
  }
  closeGraphModal() {
    this.setState({ graphModal: false })
  }
  styleArticles(articles) {
    const { getFiveArticles } = this.props;
    // intiate regular expressions
    let cnn = /cnn/gi;
    let fox = /foxnews|fox news|fox/gi;
    let readyArticleForParagraphs = /[^mr|mrs|usa|us|sen](\.\.\.|\?|!|\.)$/
    articles.forEach(article => {
      let { article_body } = article;

      article_body = _.replace(article_body, cnn, "[news agency]");
      article_body = _.replace(article_body, fox, "[news agency]");

      let articleArr = article_body.split(" ");

      let paragraphs = [];
      let paragraph = [];
      let count = 0;
      articleArr.forEach((e, i) => {
        paragraph.push(e)

        if (readyArticleForParagraphs.test(e)) {
          count++
        }
        if (count === 5) {
          paragraphs.push(paragraph.join(" "));
          paragraph = []
          count = 0;
        }
        if (i === articleArr.length - 1) {
          paragraphs.push(paragraph.join(" "));
        }
      })

      article.article_body = paragraphs.map((newParagraph, i) => {
        return (
          <p key={i} style={{marginBottom: "10px"}}>{newParagraph}</p>
        );
      });

    })
    getFiveArticles(articles);
  }
  render() {
    const { articles, indexArt1, indexArt2, updateIndexArt1AndIndexArt2 } = this.props;
    let index1 = Math.floor(Math.random() * 2);
    let index2 = index1 === 0 ? 1 : 0;
    updateIndexArt1AndIndexArt2(index1, index2);
    // const newArticle = articles
    //   .map((article, i) => (
    // <div key={i}>
    //   <article> <ReplaceSource content={article.article_body} source={article.source} /> </article>
    // </div>
    // ));

    return (
      articles[0] ? (
        <div className='accordian_style'>
          <i className='arrow right' onClick={() => this.openModal()}></i>
          <Accordion>
            <AccordionItem transition={2000}>
              <AccordionItemTitle>
                <h3>{articles[indexArt1].title}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                {articles[indexArt1].article_body}
              </AccordionItemBody>
            </AccordionItem>
            <AccordionItem expanded>
              <AccordionItemTitle>
                <h3>{articles[indexArt2].title}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                {articles[indexArt2].article_body}
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
          <Modal
            modal={this.state.modal}
            closeModal={() => this.closeModal()}
            graphModal={this.state.graphModal}
            closeGraphModal={() => this.closeGraphModal()}
            closeSingleModal={() => this.closeSingleModal()}
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
