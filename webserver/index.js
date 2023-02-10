//import express

const express=require('express');

//import cors

const cors=require('cors');

//import dataservices
const dataservices=require('./services/dataservice');

//create an apllication using express
const app=express();

//setup a port number

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

//use json parser for server response

app.use(express.json())

//using cors specify the orgin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))

//api call to get all details

app.get('/all-details',(req,res)=>{
  dataservices.getweb().then(
    result=>{
        res.status(result.statusCode).json(result)
    }
  )
})

//add sites

app.post('/addlink',(req,res)=>{
  dataservices.create(req.body.name,req.body.url,req.body.category,req.body.type).then(
    result=>{
      res.status(result.statusCode).json(result)
    }
  )
})