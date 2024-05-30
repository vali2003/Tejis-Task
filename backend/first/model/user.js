var mongo=require('mongoose')
var schema=mongo.Schema;
var userSchema=new schema({
    userId:String,
    userName:String,
    userEmail:String,
    userPassword:String,
    userMobile:String

})
var user=mongo.model('user',userSchema)
module.exports=user;