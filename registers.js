const mongoose=require("mongoose");

const customerSchema= new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", customerSchema);

module.exports=Register;