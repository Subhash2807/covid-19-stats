const request = require('request')
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

const world = (country,callback) =>{
  
  request("https://api.covid19api.com/summary",{json:true}, function (error, response, body) {
    if(error)
    return callback('error',undefined);
    var totalCase = 0;
    var totalDeaths =0;
    var newCases = 0;
    var newDeaths = 0;
    var active = 0;
    var recovered = 0;

    return callback(undefined,body.Global);
    
     
  });
}

const india = (callback)=>{
  options.qs = {country:'india'}
  request(options, function (error, response, body){
    if(error)
    return callback('error',undefined);
    var india = body.response[0];
    var TotalConfirmed = india.cases.total;
    var TotalDeaths =india.deaths.total;
    var NewConfirmed = india.cases.new===null?0:parseInt(india.cases.new);
    var NewDeaths = india.deaths.new===null?0:parseInt(india.deaths.new);
    var TotalRecovered = india.cases.recovered;
    var active = india.cases.active;
    

    var data = {
      TotalConfirmed,
      TotalDeaths,
      NewConfirmed,
      NewDeaths,
      active,
      TotalRecovered
  }
    callback(undefined,data);

  })
  
}


module.exports ={world,india}