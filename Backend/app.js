import dotenv from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import nodemailer from 'nodemailer'
import router from './routers/Admin.js'
import projectrouter from './routers/project-router.js'
import connectedPeoplerouter from './routers/connected-people-route.js'
import cookieParser from 'cookie-parser'
import { connectToDB } from './modules/dbconnection.js'
import CheckIsAuthenticated from './middleware/CheckisAuthenticated.js'
const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(cookieParser())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`server is listening on the port number ${process.env.PORT}`)
})
connectToDB()
// app.use((req,res,next)=>{
//     console.log(req.path)
//     next()
// })
app.use('/admin', router)
app.use('/project',  projectrouter)
app.use('/family',connectedPeoplerouter)

app.get("/", (req, res) => {

    res.send("Home Route")
})


