var express = require('express');
var dotenv=require('dotenv')

var userRoutes=require('./routes/userRoutes')
var productRoutes =require('./routes/productRoutes')
var app=express();

dotenv.config();
app.use(express.json());
require('./db')
var port=process.env.port;
// change
app.use('/api1',productRoutes)
app.use('/api',userRoutes)
app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})