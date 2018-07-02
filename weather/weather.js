const request = require('request');
request({
    url: 'https://api.darksky.net/forecast/65a85e0bd92a1d7d24e1e5c7d2c8fc22/37.1744876,-93.2586378',
    json: true
  }, (error, response, body) => {
    "use strict";
    if (error) {
      console.log('Could not connect to Forecast.io');
    } else if (response.statusCode === 400) {
      console.log('Unable to fetch weather');
    } else if (response.stableStringify === 200) {
      console.log(body.currently.temperature);
    }
  }
);