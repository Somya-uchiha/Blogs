const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
const user = require("./Schema/userInfo");
app.use(cors());
app.use(express.json());


const connect=()=>{
    mongoose.connect('mongodb+srv://lama:lama@cluster0.iy5pupz.mongodb.net/minor?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        throw err;
    });
}  
app.post("/Signup",async (req,resp)=>{
    const result = await user(req.body);
    let eresult = await result.save();
    resp.send(eresult);
    console.log(eresult);
})
app.listen(5000 ,()=>{
    connect();
    console.log('port working on 5000');
} )

