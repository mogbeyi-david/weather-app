const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  "use strict";
  console.log(`Latitude: ${body.results[0].geometry.location.lat}` );
  console.log(`Latitude: ${body.results[0].geometry.location.lng}` );
});