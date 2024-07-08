//resolvers.js 
//to pre process the queries 
//query -> to retrive the data (Exactly WHat data we want)
//mutation -> to update the data
const User = require('./model/userSchema');//parent
const resolvers ={
    Query:{
        getUser: async(_,{id})=>{return await User.findById(id);},
        getUsers: async()=>{return await User.find();},
        searchUsers: async(_,{name})=>{return await User.find(
            {name:new RegExp(name,'i')})
        },
    },
    Mutation:{
        createUser: async (_,{input})=>{
            const newUser = new User (input);
            return await newUser.save();
        },
        changePass:async(_,{id,password})=>{
            return await User.findByIdAndUpdate(id,{password:password});
        },
        updateUser: async (_,{id,input})=>{
            return await User.findByIdAndUpdate(id,input);
        },
        deleteUser: async(_,{id})=>{
            return await User.findByIdAndDelete(id,input); 
        }
    },
    User:{
        email:(parent)=> parent.email || '',
    },
};module.exports=resolvers;//export resolvers
