import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv'
configDotenv()
function sendEmailCustom( email, name) {
<<<<<<< HEAD
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
=======
    const connectingEmail = nodemailer.createTransport(
        {
             host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user:process.env.USER_EMAIL,
                pass:process.env.USER_EMAIL_PASS
            },
             tls: {
    rejectUnauthorized: false            // prevents TLS errors on Render
  }
        }
    )
    connectingEmail.sendMail({
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
        from: "rohitkumarroy234987@gmail.com",
        to: email,
        subject: 'contact us',
        html: `<h1>Hello, ${name}</h1>
            <P>Thaks for contacting us </P>
            <p>Please wait we must contact you</P> `
    })
<<<<<<< HEAD
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
=======
    console.log(email)
    console.log(process.env.USER_EMAIL)
    console.log(process.env.USER_EMAIL_PASS)
}
// sendEmailCustom('rohitkumarroy234987@gmail.com','rohit')
export default sendEmailCustom
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
