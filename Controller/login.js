// const auth = require('../Model/auth');
const checkLogin = require('../Model/login');
exports.getlogin = (req,res,next)=>{
    res.render('../view/login.ejs',{
        PageTitle:'Login',
        title:'Login Page'
    })
}

exports.postLogin = (req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password;
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    const check = new checkLogin(email,password);
    if(email.match(emailRegex)){
        
        check.findId(email).then(result=>{
            let userId = result._id
            req.session.isAuthenticated = true;
            res.redirect(`auth/${userId}`)
        }) 
    }
    else{
        res.send(`<h1>In valid Email Format ${email}</h1>`)
        // res.flash('Invalid email format')
    }

  
}