const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')
const adminController = require('../controllers/admin');


// /adimn/add-product => GET

router.get('/add-product', adminController.getAddProduct);

// /adimn/products => GET

router.get('/products', adminController.getProducts);

// /adimn/add-product => POST
router.post('/add-product', adminController.postAddProduct)



module.exports = router;

// next(); // Allows the request to continue to thenext middleware in line
