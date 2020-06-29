const express = require('express')
const path = require('path')
const request = require('request');
const ejs = require('ejs');
const {country} = require('./utils/country');
require('dotenv').config();

// const india = require('./module/india')
const {world,india} = require('./utils/world')

const app = express();
const indexPath = path.join(__dirname,'../public/index.html')

const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine','ejs');



app.get('/home',(req,res)=>{
  res.sendFile(indexPath)
})
app.get('/india',(req,res)=>{
  india((error,body)=>{
    if(error)
    {
      return res.render('error',{err:'something is went wrong. Please try after sometime'});
    }
    console.log(body)
    res.render('body',{body,name:'india'});
  })
  // res.send({india})
})



app.get('/stats',(req,res)=>{
  world(req.query.country,(error,body)=>{
    if(error)
    {
    return res.render('error',{err:'something is went wrong. Please try after sometime'});
    }
    return res.render('body',{body,name:'the world'});
  })
  
})


app.get('/report',(req,res)=>{
  res.redirect('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')
})


app.get('/about',(req,res)=>{
  res.render('about');
})


app.get('/country',(req,res)=>{
  country((error,body)=>{
    if(error)
    return res.send({error});
    res.send({body})
  })
})

app.get('/*',(req,res)=>{
  res.render('error',{err:'not found'})
})

app.listen(port,()=>console.log('server is started at ',port));