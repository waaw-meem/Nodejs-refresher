const express = require('express')

const rootDir =  require("./../util/path")
const adminProduct = require("./admin")

const path = require('path')
const router = express.Router()

router.get("/",(req,res,next) => {
    const products = adminProduct.products;
    res.render('shop',{prods:products, pageTitle:'Shop', path:'/', hasProducts: prods.length > 0})
    // This is for Simple HTML file code which you are observing in below code
    // console.log(adminProduct.products)
    // res.sendFile(path.join(rootDir,'views', 'shop.html'))
})

module.exports = router;