const express = require('express')
const router =express.Router();
router.get('/home',(req,res,next)=>{
    res.send(`<h1>this is your home page API </h1>`)
})
module.exports=router;
