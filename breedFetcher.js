const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const objData = JSON.parse(body);

    if (error) {
      callback(error, null);
    } else if (objData.length === 0) {
      callback(`Sorry no breed found!`, null);
    } else {
      callback(null, objData[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};

