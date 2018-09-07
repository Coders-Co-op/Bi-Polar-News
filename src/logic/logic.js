const axios = require('axios');

const logic = {

    getFiveArticles(url) {
        return axios.get(url);
    },
    getFiveRandomArticles(url) {
        return axios.get(url);
    }


}
module.exports = logic;