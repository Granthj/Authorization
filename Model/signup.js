const db = require('../utils/db');
class signUp {
    
    constructor(fname,lname,contact,email,password){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.email = email;
        this.password = password;
    }
    save(){
        return db.getdb().collection('Auth').insertOne(this);
    }
}
module.exports = signUp;