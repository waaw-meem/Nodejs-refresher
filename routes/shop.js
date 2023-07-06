const express = require('express')

// const rootDir =  require("./../util/path")
const productControllers = require('../controllers/products')

// const adminProduct = require("./admin")

const path = require('path')
const router = express.Router()

router.get("/",productControllers.getProduct)

module.exports = router;