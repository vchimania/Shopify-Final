import express from 'express';
import data from './data';
import cors from 'cors';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bodyParser from 'body-parser';

dotenv.config();

const mongodbUrl= config.MONGODB_URL;
mongoose.connect(mongodbUrl,{ //these three lines are conncetion to mongoDB
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch((error)=> console.log(error.reason)); //if error in mongoDB URL I can get the error in console

const app=express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users",userRoute);
app.get("/api/products/:id",(req,res)=>{
    const productId=req.params.id;
    const product=data.products.find(x=>x._id === productId);
    if(product){
        res.send(product);
    }else{
        res.send(404).send({msg:"Product Not Found"});
    }
});
app.get("/api/products",(req,res)=>{
    res.send(data.products);
});

app.listen(5000,()=>{console.log("Server started at http://localhost:5000")});
// app.listen(config.PORT, () => {
//     console.log('Server started at http://localhost:5000');
//   });