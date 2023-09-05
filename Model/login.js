const db = require('../utils/db');
class login{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    cheack(){
        return db.getdb().collection('Auth').findOne({email:this.email,password:this.password})
    }
    findId(email){
        return db.getdb().collection('Auth').findOne({email:this.email});
    }
}
module.exports = login;