const express = require('express');
const router = express.Router();

const { handleOtpSent, handleOtpVerification } = require('../controllers/otp');

router.post('/send',handleOtpSent);

router.post('/verify',handleOtpVerification);


module.exports = router;
