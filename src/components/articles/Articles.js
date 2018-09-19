import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import { connect } from "react-redux";
import { getFiveArticles, updateIndexArt1AndIndexArt2 } from "../../ducks/reducer";
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import CarouselSlider from "react-carousel-slider";
import ReplaceSource from '../ReplaceSource';
import Modal from '../modal/Modal';
import './article.css';
import logo from '../../images/liberal-and-conservative-news-sources.png';
import car1 from '../../images/carouselbreakingnews.jpg';
import car2 from '../../images/carouselflorence.jpg';
import car3 from '../../images/carouselflorencepeople.jpg';
import car4 from '../../images/carouselnfl.jpg';
import car5 from '../../images/carouselnfl2.jpg';
import car6 from '../../images/carouselplanes.jpg';
import car8 from '../../images/carouselsoccer.jpg';
import car7 from '../../images/carouselpolitics.jpg';




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
    const { articles, indexArt1, indexArt2 ,updateIndexArt1AndIndexArt2 } = this.props;    
    let index1 = indexArt1;
    let index2 = indexArt2;
    index1 += 2
    index2 += 2
    updateIndexArt1AndIndexArt2(index1,index2)
    if(index2 > articles.length){
      index1 = 0
      index2 = 1
      updateIndexArt1AndIndexArt2(index1,index2)
  }
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
          <p key={i} style={{ marginBottom: "10px" }}>{newParagraph}</p>
        );
      });

    })
    getFiveArticles(articles);
  }
  render() {
    let {articles,indexArt1, indexArt2} = this.props
    // const newArticle = articles
    //   .map((article, i) => (
    //     <div key={i}>
    //       <article> <ReplaceSource content={article.article_body} source={article.source} /> </article>
    //     </div>
    //   ));
    let data = [
      {
        imgSrc: logo
      },
      {
        imgSrc: car1
      },
      {
        imgSrc: car2
      },
      {
        imgSrc: car3
      },
      {
        imgSrc: car4
      },
      {
        imgSrc: car5
      },
      {
        imgSrc: car6
      },
      {
        imgSrc: car7
      },
      {
        imgSrc: car8
      }
    ];
    const breakPoints = {
      desktop: 1040, 
      phone:540
    }
    let sliderBoxStyle = {};
    if(window.innerWidth > breakPoints.desktop){
      //desktop
      sliderBoxStyle = {
        height: "90px",
        width: "899px",
        marginBottom:'20px',
        marginTop:'20px',
        background: "transparent"
      }
    } else if(window.innerWidth <= breakPoints.phone){
      //Phone
      sliderBoxStyle = {
        width:'380px',
        marginBottom:'40px',
        marginTop:'20px',
        height:'80px',
        background:'transparent'
        
      }
    }

    // const newArticle = articles
    //   .map((article, i) => (
    // <div key={i}>
    //   <article> <ReplaceSource content={article.article_body} source={article.source} /> </article>
    // </div>
    // ));

    return (
      articles[0] ? (

        <div className="overall-wrapper">
          <div className="carousel-style">
            <CarouselSlider
              slideItems={data}
              sliderBoxStyle={sliderBoxStyle}
              accEle={{
                button: false
              }}
              manner={{
                autoSliding: {
                  interval: "3s",
                  duration: "2s"
                }
              }}
            />
          </div>
          <div className="non-accordion-style">
            <div className="article-col-1">
            <h3>{articles[indexArt1].title}</h3>
            {articles[indexArt1].article_body}


            </div>
            <div className="article-col-2"> 
            <h3>{articles[indexArt2].title}</h3>
            {articles[indexArt2].article_body}


            <i className='arrow right' onClick={() => this.openModal()}></i>            
            </div>

          </div>
          <div className='accordion-style'>
            <summary><strong>Instructions:</strong>  Read both articles, then on the next page, share which you think is more reasonable.</summary>
            <div className="alt">Read both articles and share which is more reasonable.</div>
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
