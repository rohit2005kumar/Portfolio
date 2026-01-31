import mongoose from "mongoose";
import { configDotenv } from "dotenv";
export const connectToDB=async()=>{
   await mongoose.connect(process.env.DB)
   console.log("Connect to Db")
}
