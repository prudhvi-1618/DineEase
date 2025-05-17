const dotenv =  require('dotenv')
const twilio = require('twilio');

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const otpStore = {}; 

async function handleOtpSent(req,res){
    const { phone } = req.body;
  
  const otp = Math.floor(100000 + Math.random() * 900000); 

  otpStore[phone] = otp;

  try {
    await client.messages.create({
      body: `Your OTP to checkout DineEase orders is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+91"+phone,
    });
    res.json({ success: true, message: 'OTP sent!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

function handleOtpVerification(req,res){
    const { phone, otp } = req.body;

    if (otpStore[phone] == otp) {
        delete otpStore[phone]; 
        res.json({ success: true, message: 'OTP verified!' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid OTP' });
    } 
}

module.exports = {handleOtpVerification,handleOtpSent}