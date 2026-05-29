import mongoose from "mongoose";
const connectedPeopleSchema=new mongoose.Schema({
    name:{
        type:String,
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
    }

})

const connectedPeople= mongoose.model('connectedPeople',connectedPeopleSchema)
export default connectedPeople;