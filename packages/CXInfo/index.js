const {API} = require('CXUtil');
const axios = require('axios');

const getPopularImg = () => axios.get(API);

module.exports = getPopularImg;

