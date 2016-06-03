var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c66295b82126a50fc88662ce6fc0f87d&units=imperial';

//appid=c66295b82126a50fc88662ce6fc0f87d
//units=metric

module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function(err){
      throw new Error(res.data.message);
    });
  }
}
