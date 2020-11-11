const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')
const productsController = require('../controllers/product');


// /adimn/add-product => GET

router.get('/add-product', productsController.getAddProduct);

// /adimn/add-product => POST
router.post('/add-product', productsController.postAddProduct)

module.exports = router;

// next(); // Allows the request to continue to thenext middleware in line
