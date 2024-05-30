var express = require('express');
var router = express.Router();

var user=require('../model/user')
router.post("/reg",(req,res)=>{
  var userName=req.body.userName;
  user.findOne({userName:userName}).select("userName")
  .then((data)=>{
    if(data==null){
      var newuser=new user(req.body);
      newuser.save()
      .then(()=>res.send("user registered"))
      .catch((err)=>console.log(err))
    }else{
      res.send("user already exhist")
    }
  })
})

router.post('/login',(req,res)=>{
  var {userName,userPassword}=req.body;
  user.findOne({userName:userName}).select("userName userPassword")
  .then((data)=>{
    if(data==null){
      res.send("user not found")
    }else{
      if(data.userPassword==userPassword){
        res.send("Login success")
      }else{
        res.send("UserName or Password is incorrect")
      }
    }
  })
})
module.exports = router;
