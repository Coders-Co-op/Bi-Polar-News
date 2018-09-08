
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFiveArticles } from '../../ducks/reducer'
import ReplaceSource from '../ReplaceSource'

class Article extends Component {
  render() {
    const newArticle = this.props.articles.map((article, i) => (
      <div key={i}>
        <h3> {article.title}</h3>
        <article> <ReplaceSource content = {article.article_body} source = {article.source} /> </article>
      </div>
    ))
    return (
      <div>
        {newArticle}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}
export default connect(mapStateToProps, { getFiveArticles })(Article)
