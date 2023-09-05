const express = require('express');
const app = express();
const route = express.Router();

const otp = require('../Controller/otpsender');

route.get('sendotp',otp.getOtp);

route.post('sendotp',otp.postOtp);