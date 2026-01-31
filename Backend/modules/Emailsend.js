import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv'
configDotenv()
function sendEmailCustom( email, name) {
    const connectingEmail = nodemailer.createTransport(
        {
            service: "gmail",
            auth: {
                user:process.env.USER_EMAIL,
                pass:process.env.USER_EMAIL_PASS
            }
        }
    )
    connectingEmail.sendMail({
        from: "rohitkumarroy234987@gmail.com",
        to: email,
        subject: 'contact us',
        html: `<h1>Hello, ${name}</h1>
            <P>Thaks for contacting us </P>
            <p>Please wait we must contact you</P> `
    })
    console.log(email)
    console.log(process.env.USER_EMAIL)
    console.log(process.env.USER_EMAIL_PASS)
}
// sendEmailCustom('rohitkumarroy234987@gmail.com','rohit')
export default sendEmailCustom