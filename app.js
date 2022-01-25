const express = require('express');
const conn = require('./db/conn');
const { MongoClient } = require('mongodb');


// express app
const app = express();
// var db;

// connect to mongodb
conn.connectToServer((err) => {
    if (err) console.log(err);
    app.listen(3000);
});

app.get('/', (req, res) => {
    console.log('get request');

    // db.collection('posts').insertOne(
    //     {
    //         title: 'title 01',
    //         body: 'body 01'
    //     }
    // );

    let data = conn.getDb().collection('posts').find().toArray();
    // console.log(data);
    data.then((dd) => {
        console.log(dd);
        res.end(JSON.stringify(dd));
    });

})