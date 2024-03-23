const request = require('request');
const url = 'api.meteomatics.com / validdatetime / parameters / locations / format ? optionals';

request({ url: url }, (error, response) => {
    console.log(response);
})