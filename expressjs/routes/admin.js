const express=require('express')
const path=require('path')
const rootDir=require('../util/path.js')

const router=express.Router();


router.get('/addproduct',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','addproduct.html'))    
  // res.sendFile(path.join(__dirname,'../','views','addproduct.html'))    
})

router.post('/addproduct',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

module.exports=router;
