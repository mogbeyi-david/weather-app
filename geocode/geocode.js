const request = require('request');

geocodeAddress = function (address) {
  "use strict";
  const encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to the google server');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to Find the Address');
    } else if (body.status === 'OK') {
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
    }
  });
};

module.exports = {
  geocodeAddress
}