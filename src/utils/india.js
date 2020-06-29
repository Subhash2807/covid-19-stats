const request = require('request')

const india = (callback) =>{
 request('https://api.covid19india.org/v2/state_district_wise.json',{json:true},(error,data,body)=>{
    if(error)
    {
        return callback('error',undefined);
    }
    callback(undefined,body);
})

}


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

module.exports ={
    india
}