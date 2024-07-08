const express = require('express')
const router=express.Router()
const User=require('../model/userSchema')

router.post('/',(req,res)=>{
    try{
    const{name,email,password} =req.body;
    const userQuery=new User(
        {name,email,password});
        userQuery.save();
        res.status(201).send({message:"USER created",userQuery});
}catch(err){
    res.status(500).send(
        {message:err.message});
}
})
router.get('/',async(req,res)=>{
    try{
        const data= await User.find();
        res.status(201).send(data);

        }catch(err){
            res.status(500).send({message:err,message});
        }
})
//PUT the data (update the data)
router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.updateOne({_id:userId}, {$set:{password: password }});
          //use findByIdAndUpdate instead of UpdateOne
        if (!updatedUser.nModified===0) {
            return res.status(404).send({ message: "User not found" }); }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} 
});
router.delete('/:id',async (req,res)=>{
    try{
        const userId = req.params.id;
        const deletedUser = await User.deleteOne({_id:userId});
        if(deletedUser.nModified===0){
            return res.status(404).send({message:"Id does'nt exist"})
        }
        res.status(200).send({message:"user deleted",deletedUser});
    }catch(err){
        res.status(500).send({message:err})
    }
})

module.exports=router;