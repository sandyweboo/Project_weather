const axios = require('axios');

const getGeo = (location) => {
    return new Promise((resolve, reject) => {

        const geourl = 'https://geocoding-api.open-meteo.com/v1/search?name=' + location + '&count=1&language=en&format=json';

        axios.get(geourl)
            .then(function (response) {
                resolve({
                    name: response.data.results[0].name,
                    lat: response.data.results[0].latitude,
                    log: response.data.results[0].longitude
                });
            })
            .catch(function (error) {
                reject({error:"unable to find location"});
            });

    })
}


module.exports =getGeo
// const location ="habarana"
// const geourl = 'https://geocoding-api.open-meteo.com/v1/search?name=' + location + '&count=1&language=en&format=json';

// axios.get(geourl)
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error)
//     });