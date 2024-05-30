var express = require('express');
var router = express.Router();

var express=require('express')
var router=express.Router();
var book=require('../model/book')
router.get('/books',(req,res)=>{
  book.find({})
  .then((data)=>res.json(data))
  .catch((err)=>console.log(err))
})

router.post('/addbooks',(req,res)=>{
  var newbook=new book(req.body)
  newbook.save()
  .then(()=>res.send("Data saved"))
  .catch((err)=>console.log(err))
})
//Delete Products by using productId
router.delete('/delete/:id',(req,res)=>{
    let bookId=req.params.id;
    book.deleteOne({_id:bookId})
    .then((result)=>{
        if(result.deletedCount>0)
            res.send("Data deleted...")
        else{
            res.send("Data not found..")
        }
    })
    .catch((err)=>console.log(err))
});


//Update product by using productId
router.put('/update/:id',(req,res)=>{
    let bookid=req.params.id;
    let updatedbook=req.body;
    book.updateOne({_id:bookid},updatedbook)
    .then((result)=>{
        if(result.modifiedCount>0)
            res.send("Data modified...")
        else{
            res.send("Data not found..")
        }
    })
    .catch((err)=>console.log(err))
})

module.exports = router;
