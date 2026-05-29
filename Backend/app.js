<<<<<<< HEAD
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
=======
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import nodemailer from 'nodemailer'
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'
import { connectToDB } from './modules/dbconnection.js'
import ConnectUser from './Models/ConnectUser.js'
import sendEmailCustom from './modules/Emailsend.js'
dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
connectToDB()
// console.log(nodemailer.createTestAccount())
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6

app.listen(process.env.PORT, () => {
    console.log(`server is listening on the port number ${process.env.PORT}`)
})
<<<<<<< HEAD
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


=======
// const file=path.join(__dirname, 'download','Resume.pdf')
// console.log(file)
app.get("/", (req, res) => {
    res.send("Home Route")
})
app.get('/download', (req, res) => {
    res.download("download/Resume.pdf")
});
app.post('/connect', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body.userinfo
        const user = new ConnectUser({
            name: name,
            message: message,
            subject: subject,
            email: email
        })
        sendEmailCustom(email, name)
        await user.save()

        res.send("data send successfull")
    } catch (error) {
        res.send(error.message

        )
    }

})
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
