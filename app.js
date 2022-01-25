const express = require('express');
const { connectToServer, getDb} = require('./db/conn');

// express app
const app = express();

// connect to mongodb
connectToServer((err) => {
    if (err) console.log(err);
    app.listen(3000);
});

app.get('/', (req, res) => {
    console.log('get request');

    getDb().collection('posts').find().toArray().then((dd) => {
        console.log(dd);
        res.end(JSON.stringify(dd));
    });

})