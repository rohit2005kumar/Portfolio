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


app.listen(process.env.PORT, () => {
    console.log(`server is listening on the port number ${process.env.PORT}`)
})
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
