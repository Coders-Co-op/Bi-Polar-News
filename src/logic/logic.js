const axios = require('axios');
const _ = require('lodash')

const logic = {

    getFiveArticles(url) {
        return axios.get(url);
    },
    getFiveRandomArticles(url) {
        return axios.get(url);
    },
    replaceTest(article,regEx1,regEx2){
        let {article_body} = article
        article_body = _.replace(article_body, regEx1, "[news agency]");
        article_body = _.replace(article_body, regEx2, "[news agency]");
        
        return article_body
    },
    splitTest(article){
        let {article_body} = article;
        let words = article_body.split(' ')
        return words
    },
    testForTitle(article){
        return article.hasOwnProperty('title')
    },
    testForBody(article){
        return article.hasOwnProperty('article_body')
    },
    testForSource(article){
        return article.hasOwnProperty('source')
    }


}
module.exports = logic;