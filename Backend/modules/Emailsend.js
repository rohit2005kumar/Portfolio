import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv'
configDotenv()
function sendEmailCustom( email, name) {
    try{
        const connectingEmail = nodemailer.createTransport(
        {
            service:'gmail',
              host: "smtp.gmail.com",
            port: 587,
            auth: {
                user:process.env.USER_EMAIL,
                pass:process.env.USER_EMAIL_PASS
            }
        }
    )
  const ret=  connectingEmail.sendMail({
        from: "rohitkumarroy234987@gmail.com",
        to: email,
        subject: 'contact us',
        html: `<h1>Hello, ${name}</h1>
            <P>Thaks for contacting us </P>
            <p>Please wait we must contact you</P> `
    })
    }catch(e){
        console.log(e)

    }
    // console.log(email)
    // console.log(process.env.USER_EMAIL)
    // console.log(process.env.USER_EMAIL_PASS)
    // return ret
}
// sendEmailCustom('rohitkumarroy234987@gmail.com','rohit')
export default sendEmailCustom