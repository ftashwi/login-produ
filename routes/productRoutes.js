var express=require('express');
var router=express.Router();
var productModel=require('../model/product');


router.post('/post',(req,res)=>{
    try {
        productModel(req.body).save();
        res.send("data added")
    } catch (error) {
        res.send(error)
    }
})
//login
router.get('/get',async(req,res)=>{
    try{
        var data= await productModel.find();
        res.send(data)
        }
        
         catch (error) {
            res.send(error)
        }
    })
    router.delete('/delete/:id',async(req,res)=>{
        try {
            await productModel.findByIdAndDelete(req.params.is,req.body);
            res.send("Data Deleted");
        
        } catch (error) {
            console.log(error)
        }
    })
    router.put('/update/:id',async(req,res)=>{
        try {
            await productModel.findByIdAndDelete(req.params.is,req.body);
    
        } catch (error) {
           console.log(error) 
        }
    })
  
module.exports=router;