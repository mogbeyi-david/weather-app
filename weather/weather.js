const request = require('request');

const getWeather = (latitude, longitude, callback) => {
  "use strict";
  request({
      url: `https://api.darksky.net/forecast/65a85e0bd92a1d7d24e1e5c7d2c8fc22/${latitude},${longitude}`,
      json: true
    }, (error, response, body) => {
      "use strict";
      if (error) {
        callback('Could not connect to Forecast.io');
      } else if (response.statusCode === 400) {
        callback('Unable to fetch weather');
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          actualTemperature: body.currently.apparentTemperature
        });
      }
    }
  );
};

module.exports = {
  getWeather
};