const mongoose = require("mongoose");
const userInfo = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})
module.exports=mongoose.model("minorchat" , userInfo);