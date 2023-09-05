const signup = require('../Model/signup')
exports.getSignup = (req,res,next)=>{
    res.render('../view/home.ejs',{
        PageTitle:'Home Page',
        title:'Welcome To Home'
    })
}

exports.postSignup = (req,res,next)=>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let contact = req.body.contact;
    let email = req.body.email;
    let password = req.body.password;

    const signUp = new signup(fname,lname,contact,email,password);
    signUp.save().then(result=>{
        console.log('Done')
        res.redirect('/login')
    });
}