const express= require("express");
const mongoose=require("mongoose");

const app=express();

mongoose.connect("mongodb+srv://admin:kqAwhQkuV6qPIMAh@cluster0.9fzmxm6.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000,()=>
console.log("Connected nd listening to the port 5000")
))
.catch((err)=>console.log(err))