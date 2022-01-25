const express = require('express');

const router = express.Router();

// default router
router.get('/', (req, res) => {
    console.log('hello');
    res.end('login');
})

// posts router



module.exports = {
    router
}