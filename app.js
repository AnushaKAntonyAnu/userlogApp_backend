const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {usermodel}=require("./models/adduser")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anusha:anusha13@cluster0.hyxpaoy.mongodb.net/userlogDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let user=new usermodel(input)
    user.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8086,()=>{
    console.log("server started")
})