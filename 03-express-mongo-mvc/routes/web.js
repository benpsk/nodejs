const express = require('express');
const testController = require('../controllers/testController');

const router = express.Router();

// default router
router.get('/', (req, res) => {
    console.log('default route');
    res.end('default route');
})

router.get('/test', testController.test_index);
router.get('/test/detail', testController.test_detail);
// posts router

module.exports = {
    router
}