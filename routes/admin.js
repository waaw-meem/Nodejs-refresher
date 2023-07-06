const express = require('express')
const fs = require('fs')

const productControllers = require('../controllers/products')

const path = require('path')

const router = express.Router()

router.get('/add-products',productControllers.getAddProduct)
router.post('/add-products',productControllers.postAddProduct);

module.exports = router;
