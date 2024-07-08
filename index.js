/*const express = require('express')
const mongoose=require('mongoose')
const UserApi=require('./routes/users')
const app = express()
const port = 3001;// as react is running in 3000 port
app.use(express.json())

const url='mongodb+srv://uppuluriabhikhya2:abhikhya123@cluster0.eqg36.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//connecting my express app to my mongodb server
mongoose.connect(url).then(()=>{console.log('MongoDB connected')})
.catch((err)=>console.log(err));
app.use('/users',UserApi)
app.listen(port,()=>{
    console.log(`Server is live on port`);
});
const express =require('express');
const mongoose=require('mongoose');
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs=require('./schema');
const resolvers=require('./resolvers');
const app=express();
const port=3001
const url='mongodb+srv://uppuluriabhikhya2:abhikhya123@cluster0.eqg36.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json())//parsing
mongoose.connect(url).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apolo express server
const server=new ApolloServer ({typeDefs,resolvers});
async function StartServer(){
await server.start();
server.applyMiddleware({app});//run my express code
app.listen(port,()=>{
    console.log('server live 3001');
})
}
StartServer();*/

const express=require('express');
const mongoose=require('mongoose');
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers=require('./resolvers');
const userApiFromRouter=require('./routes/userRoutes');


const app=express();
const port= 3001;
const url='mongodb+srv://uppuluriabhikhya2:abhikhya123@cluster0.eqg36.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB Connected')})
.catch((err)=>{console.log(err)});
//start my apollo server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app}); //run my express code
    app.listen(port,()=>{
        console.log(`server live 3001`);
    })
}
StartServer();