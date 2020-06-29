const request = require('request');
const { response } = require('express');

var options = {
    method: 'GET',
    json:true,
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_KEY,
      useQueryString: true
    }
  };

var country = (callback)=>{
    request(options,(error,response,body)=>{
        if(error)
        return callback('error',undefined);

        return callback(undefined,body);
        
    })
}

module.exports = {
    country
}