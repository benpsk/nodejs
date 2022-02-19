const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

let db;

const connectToServer = (callback) => {
    MongoClient.connect((err, client) => {
        if (err) return callback(err);
        db = client.db('express_mongo');
        console.log('db connect success');
        return callback();
    }, url)
}


const getDb = () => {
    return db;

}

module.exports = {
    getDb,
    connectToServer
}