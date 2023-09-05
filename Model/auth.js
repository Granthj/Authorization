const mongodb = require('mongodb')
const db = require('../utils/db');
class auth{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    find(id){
        return db.getdb().collection('Auth').find({_id:new mongodb.ObjectId(id)}).toArray();
    }

}
module.exports = auth;