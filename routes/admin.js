const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path') 

router.get('/add-product', (req, res, next) => {
// res.send('<form action="/admin/add-product" method="POST">  <input type="text"  name="title"> </form>')
//res.sendFile(path.join(__dirname,'../','views','add-product.html'))
res.sendFile(path.join(rootDir,'views','add-product.html'))


});
router.post('/add-product', (req, res, next) => {
    console.log(req.body, 'bodyddyy')
    res.redirect('/')
})

module.exports = router;

// next(); // Allows the request to continue to thenext middleware in line
