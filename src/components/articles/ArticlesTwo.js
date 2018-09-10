import React, { Component } from "react";
import { connect } from "react-redux";
import { getFiveArticles } from "../../ducks/reducer";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ReplaceSource from '../ReplaceSource';

class ArticlesTwo extends Component {
  render() {
    const newArticle = this.props.articles.map((article, i) => (
      <div key={i}>
        <h3> {article.title}</h3>
        <article> <ReplaceSource content = {article.article_body} source = {article.source} /> </article>
      </div>
    ));

    return (
      <div>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
                <h3>First Article</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>This is article 1</p>
              {newArticle[2]}
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
          <AccordionItemTitle>
                <h3>Second Article</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>this is article 2</p>
              {newArticle[3]}
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
        
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
)(ArticlesTwo);
