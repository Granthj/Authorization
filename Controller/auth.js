const auth = require('../Model/auth');
exports.getAuth = (req,res,next)=>{
    if(req.session.isAuthenticated === true){
        const id = req.params.userId;
        const Auth = new auth();
        console.log(id)
        Auth.find(id).then(result=>{
            res.render('../view/auth.ejs',{
                title:'Authorization Page',
                user:result,
                Authentication:req.session.isAuthenticated
            })   
        })
    }
}
exports.isAuthenticated = (req,res,next)=>{
    if(req.session.isAuthenticated){
        next();
    }
    else{
        res.render('../view/session',{});
    }
}

