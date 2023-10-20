const express=require("express");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRoute=require("./routes/users")
const app=express();

dotenv.config()

app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>console.log(err));

app.use("/backend/users",userRoute)

app.listen(8080,()=>{
    console.log("backend server is running");
})

