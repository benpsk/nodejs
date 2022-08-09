const express = require('express');
const { router} = require('./routes/web');

const { connectToServer } = require('./db/conn');


// express app
const app = express();

// connect to mongodb
connectToServer((err) => {
    if (err) console.log(err);
    app.listen(3000);
});

// use router
app.use('/', router);