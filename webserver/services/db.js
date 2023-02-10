//import mongoose

const mongoose=require('mongoose');

//define the connection string

mongoose.connect('mongodb://localhost:27017/web',()=>{
    console.log('connected to mongo db');
})

//create a model for the web

const Links=mongoose.model('Links',{
    //schema creation
    id:Number,
    name:String,
    url:String,
    category:String,
    status:Boolean,
    type:String
})

module.exports={
    Links
}