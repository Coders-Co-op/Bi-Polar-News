const axios = require('axios');

const logic = {

    getFiveArticles(url) {
        return axios.get(url);
    },
    // canAdd(a, b) {
    //     return a + b
    // }


}
module.exports = logic;