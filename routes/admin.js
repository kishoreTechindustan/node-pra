const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')


const products = []
// /adimn/add-product => GET

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST">  <input type="text"  name="title"> </form>')
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    //res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
});

// /adimn/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.routes = router;
exports.products = products
// next(); // Allows the request to continue to thenext middleware in line
