const mongoDb = require('mongodb');

const mongoClient = mongoDb.MongoClient;
let _db;

const MongoConnect = (cb)=>{
    mongoClient.connect('mongodb+srv://root:8318383381@cluster0.hsxuybg.mongodb.net/?retryWrites=true&w=majority')
    .then(client=>{
        console.log('Connect')
        _db = client.db('Authorization')
        cb(_db);

    })   
}
const getdb = ()=>{
    return _db
}
exports.getdb = getdb;
exports.MongoConnect = MongoConnect;