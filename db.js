var mongoose = require("mongoose");

mongoose.
connect("mongodb+srv://ashwinxyz47:ashwin77ft@cluster0.xuoebzw.mongodb.net/ashwin?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((err)=>(console.log(err)))
