import React, { Component } from 'react'
import axios from 'axios';
import _ from "lodash";
import './topics.css';
import { connect } from 'react-redux'
import { getFiveArticles } from '../../ducks/reducer';




class Topics extends Component {
  constructor() {
    super()
    this.state = {
      topicsArray: []
    }
  }

  componentDidMount() {
    let promise = axios.get('/api/alltopics')
    promise.then(res => {
      this.setState({
        topicsArray: res.data
      })
    })
  }

  handleClick(redcat) {
    console.log("redcat = ", redcat)
    const { getFiveArticles, history } = this.props;
    axios.get(`/api/article/${redcat}`).then(res => { //${redcat
      this.styleArticles(res.data)
      history.push('/articles')
    })
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

    String.prototype.toProperCase = function () {
      return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };

    const topicsArr = [...this.state.topicsArray];
    let topicName = '';
    let formattedList = topicsArr.map((e, i) => {
      if (topicName !== e.topic_name) {
        topicName = e.topic_name;
        return (
          <div className="topics-wrapper" key={i}>
            <div className={e.topic_name === "politics" ? "politics-wrap" : e.topic_name === "legal" ? "legal-wrap" : e.topic_name === "business" ? "business-wrap" : e.topic_name === "education" ? "education-wrap" : "social-wrap"} onClick={() => this.handleClick(e.topic_name)}><h3 onClick={() => this.handleClick(e.topic_name)}> {topicName.toProperCase()}</h3></div>
          </div>
        )
      } else {
        return null
      }
    })

    return (
      <section>
        <div className="card-box">

          <div className="formatted-list">{formattedList}</div>


        </div>
      </section>
    )
  }
}
export default connect(null, { getFiveArticles })(Topics)