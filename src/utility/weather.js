
const axios = require('axios'); 

const getWeather = (lat,log)=>{
    return new Promise((resolve,reject)=>{
        const url ='https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+log+'&current=temperature_2m,is_day';

        axios.get(url)
          .then(function (response) {
            resolve({weather:response.data.current.temperature_2m})
           // console.log(response.data);
          })
          .catch(function (error) {
            reject({error:"unable to find weather"})
            //console.log(error);
          });
        
    })

}
module.exports = getWeather;
