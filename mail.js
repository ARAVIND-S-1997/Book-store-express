import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export function emailsender(emailid, message,response) {


    // Nodemail 
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILID,
        pass: process.env.PASSWORD
      }
    })
    const mailContent = {
      from: process.env.mailid,
      to: emailid,
      subject: "Mail from basic login setup",
      html: message,
    }
    transporter.sendMail(mailContent, (err, info) => {
      if (err) {
        console.log("err");
        response.send(err)
        console.log(err)
  
      } else {
        response.send(info)
        console.log(info)
  
      }
    }
    )
  }
  