const {API,API_VERSION} = require('CXUtil');
const axios = require('axios');

const getPopularImg = () => axios.get(API);
const Api_Version = API_VERSION;

module.exports = {
    getPopularImg,
    Api_Version,
};

