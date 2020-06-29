const request = require('request');
const { response } = require('express');

var options = {
    method: 'GET',
    json:true,
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'ebfc698951msh818ed6a9a1cddc6p1bb917jsn73549a09eb55',
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