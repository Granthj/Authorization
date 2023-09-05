const express = require('express');
const app = express();
const route = express.Router();

const signup = require('../Controller/signup');

route.get('/',signup.getSignup);

route.post('/',signup.postSignup);

module.exports = route;