
const Product = require('../models/product')
// const path = require('path');
// const rootDir = require('../util/path');
exports.getAddProduct = (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST">  <input type="text"  name="title"> </form>')
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    //res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
}


exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/')
}


exports.getProducts = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    //res.sendFile(path.join(rootDir,'views','shop.html'))

    Product.fetchAll(products => {
        res.render('shop', {
            products: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });

}