const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');

const loginRoute = require('./home');
const signupRoute = require('./login');
const authRoute = require('./auth');
const db = require('../utils/db');

// app.use(express.static((__dirname,'view')));
app.set('view engine','ejs');
app.set('views','view');

app.use(session({secret:'root',saveUninitialized:false,resave:false,cookie:{maxAge:1000}}))

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoute);
app.use(signupRoute);
app.use(authRoute);

// app.use('/',(req,res,next)=>{
//     res.send('<h1>Error</h1>')
// })

db.MongoConnect(()=>{
    app.listen(8000);
})




