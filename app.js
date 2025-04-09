var express = require('express');
require('./db')
var userRoutes=require('./routes/userRoutes')
var productRoutes =require('./routes/productRoutes')
var app=express();
app.use(express.json());
var port=4000;
app.use('/api1',productRoutes)
app.use('/api',userRoutes)
app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})