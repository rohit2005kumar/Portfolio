import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const adminSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
         type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password:{
        type:String,
        required:true
    }
})
adminSchema.pre('save',async function (next) {
    if(!this.isModified('password')) return
    this.password=await bcrypt.hash(this.password,10) 
    
})
adminSchema.methods.comparePassword=async function (userPassword) {
    const isMatch=await bcrypt.compare(userPassword,this.password)
    return isMatch;
    
}
const adminModel=mongoose.model('adminModel',adminSchema)
export default adminModel;