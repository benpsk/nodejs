const testModel = require('../models/test');

const test_index = (req, res) => {
    testModel.getTest(req, res);
}

const test_detail = (req, res) => {
    console.log('test_detail');
    testModel.getTestDetail(req, res);
}

module.exports = {
    test_index,
    test_detail
}