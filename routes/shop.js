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
    res.render('shop', { products, pageTitle: "shop", path: "/" })

});


module.exports = router;