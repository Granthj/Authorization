const express = require('express');
const app = express();
const route = express.Router();

const login = require('../Controller/login');

route.get('/login',login.getlogin);

route.post('/login',login.postLogin);

module.exports = route;