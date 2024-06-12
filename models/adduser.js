const mongoose =require("mongoose")
const schema= mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "bloodgroup":String,
        "mobileno":String,
        "address":String,
        "place":String,
        "district":String,
        "pincode":String,
        "email":String,
        "username":String,
        "password":String
    }
)

let usermodel=mongoose.model("users",schema)
module.exports={usermodel}
