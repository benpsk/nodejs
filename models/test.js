const { getDb } = require('../db/conn');

const getTest = (req, res) => {
    console.log('test_index_model');
    getDb().collection('posts').findOne().then((dd) => {
        console.log(dd);
        res.end(JSON.stringify(dd));
    });
}

const getTestDetail = (req, res) => {
    console.log('test_detail');
    getDb().collection('posts').find().toArray()
        .then((dd) => {
            console.log(dd);
            res.end(JSON.stringify(dd));
        })
}

module.exports = {
    getTest,
    getTestDetail
}