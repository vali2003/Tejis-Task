var mongo=require('mongoose')
var schema=mongo.Schema;
var bookSchema=new schema({
   bookId:String,
   bookName:String,
   bookPrice:String,
   bookAuthor:String,
   bookImage:String,
   bookDescription:String

})
var book=mongo.model('book',bookSchema)
module.exports=book;