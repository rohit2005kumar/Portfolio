import mongoose from "mongoose";
const blackListTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        unique:true,
        required:true
    }
},{timestamps:true})
const blackListTokenModel=mongoose.model('blackListToken',blackListTokenSchema)
export default blackListTokenModel