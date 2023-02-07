const express = require("express");
const mongoose = require ("mongoose");
const nodemailer = require("nodemailer")
const dotenv= require("dotenv")
const cors= require("cors")
dotenv.config();


const app = express();
app.use(express.json())
app.use(cors());
app.options("*", cors())

let transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        type:"OAuth2",
        user:process.env.EMAIL,
        password:process.env.WORD,
        clientId:process.env.OAUTH_CLIENTID,
        clientSecret:process.env.OAUTH_CLIENT_SECRET,
        refreshToken:process.env.OAUTH_REFRESH_TOKEN,
      }
})

transporter.verify((err, success) => {
  err
  ?console.log(err)
  :console.log(`==== Server is ready to take messages ${success} ===`)
});

app.get('/', async(req,res) => {
  res.status(200).json({message: "New Request"})
})
 

 app.post('/send',function (req,res) {
  
  const {name,email,text} = req.body;

  
  let  mailOptions = {
    
    from:`Customer ${email}`,
    to: process.env.EMAIL,
    subject:`new Message from ${email}`,
    text:`${text}`,
     html:`
     <p>you have a new message</p> 
     <h3>Contact Details</h3>
     <ul>
     <li>${name}</li>
     <li>${email}</li>
     <li>${text}</li>
     
     `

  };

  transporter.sendMail(mailOptions, function (err, data) {
    if(err) {
      res.json({status:"fail"})
    }else {
      console.log("=== Message Sent ===")
      res.json({status:"success"})
    }
  
   
   })

   res.status(200).json("The Email has been sent")
 })

 

const PORT = 5000;

app.listen(PORT, ()=> console.log(` Running the server on port: http://localhost:${PORT}`))