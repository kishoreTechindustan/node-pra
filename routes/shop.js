const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const products = adminData.products;

//== shop =>GET

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    //res.sendFile(path.join(rootDir,'views','shop.html'))
    const products = adminData.products;
    res.render('shop', {
        products: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});


module.exports = router;