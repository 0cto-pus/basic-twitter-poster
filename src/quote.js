const axios = require('axios');
const { getRandomCategory } = require('./category.js');
require("dotenv").config({ path: "../.env" });

var category = getRandomCategory();

const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: {
        'X-Api-Key': process.env.QUOTE_KEY,
        'contentType': 'application/json',
    }
};

async function getQuote() {
    try {
        const response = await axios.request(options);
        return response.data[0];
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getQuote }; 