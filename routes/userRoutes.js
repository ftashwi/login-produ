var express=require('express');
var router=express.Router();
var userModel=require('../model/user');

router.post('/',(req,res)=>{
    try {
        userModel(req.body).save();
        res.send("User added")
    } catch (error) {
        res.send(error)
    }
})
//login
router.post('/login',async(req,res)=>{
    
        const user=await userModel.findOne({email:req.body.email})
        if(!user){
            return res.send("User not found")
        }
        try {
            if (user.password ===req.body.password) {
                res.send("login succesfull")
            } else {
                res.send("Invalid password")
            }
        } catch (error) {
            res.send(error)
        }
    })
    
  
module.exports=router