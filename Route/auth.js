const express = require('express');
const Auth = require('../Controller/auth');
const app = express();
const route = express.Router();

// route.post('/auth',Auth.postAuth);

route.get('/auth/:userId',Auth.isAuthenticated,Auth.getAuth);

module.exports = route;