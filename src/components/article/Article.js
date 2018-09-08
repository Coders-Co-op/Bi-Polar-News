
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFiveArticles } from '../../ducks/reducer'

class Article extends Component {
  render() {
    const newArticle = this.props.articles.map((article, i) => (
      <div key={i}>
        <h3> {article.title}</h3>
        <article> {article.article_body}</article>
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
