const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';


request(url, (error, response, body) => {
  if (error) {
    return console.log("Error");
  }
  console.log('Response: ', response && response.statusCode);

  const objData = JSON.parse(body);
  console.log(objData[0]);
});