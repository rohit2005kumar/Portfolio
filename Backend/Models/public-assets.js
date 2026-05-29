import mongoose from "mongoose";
const assets=new mongoose.Schema({
    resume:{
         secure_Url:{
            type:String,
        required:true
        },
         url:{
            type:String,
        required:true
        }
    },
    homeImage:{
        secure_Url:{
            type:String,
        required:true
        },
         url:{
            type:String,
        required:true
        }
        
    },
    aboutImage:{
        secure_Url:{
            type:String,
        required:true
        },
         url:{
            type:String,
        required:true
        }
    }
})
const assetsModle=mongoose.model('publicAssets',assets);
export default assetsModle;