const TOKEN = "pk.eyJ1IjoibWFnYWJvbyIsImEiOiJjbDA5eGhqOTAwNWQ4M21wY2drZjRvN2N3In0.GdYfQ1DulUyzdva_gWc9kQ";
const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const ADDRESS = "Calle Buritica, 10, 28033 Madrid España";
const URLParams = `.json?country=es&limit=1&types=place%2Cpostcode%2Caddress&language=es&access_token=${TOKEN}`;

const finalURL = `${baseURL}${encodeURIComponent(ADDRESS)}${URLParams}`;

const axios = require('axios')
console.log(finalURL)
axios
    .get(finalURL)
    .then(res => {
        console.log(res.data.features[0].center)
    })
    .catch(error => {
        console.error(error)
    })