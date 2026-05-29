import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    email:{
        type:String,
        required:true
    },
     subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
 
},{timestamps:true})
const ConnectUser=mongoose.model('ConnectUser',userschema)
export default ConnectUser
    