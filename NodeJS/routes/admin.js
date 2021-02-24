const express = require('express');
const router = express.Router();

function testMiddleware (req, res, next){
    console.log('첫번째 미들웨어');
    next();
};

function testMiddleware2 (req, res, next){
    console.log('두번째 미들웨어');
    next();
};

router.get('/', (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
    res.render('admin/products.html', {
        message : '<h1>hello</h1>',
        online : 'express'
    });
});

module.exports = router;