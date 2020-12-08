const {API} = require('CXUtil');
const axios = require('axios');

const getPopularImg = () => axios.get(API);

module.exports = getPopularImg;


getPopularImg().then((res) => console.log(res.data)).catch((e)=>{
    console.log(e);
});
