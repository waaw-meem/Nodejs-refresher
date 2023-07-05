const express = require('express')
const fs = require('fs')

const rootDir =  require("./../util/path")

const path = require('path')

const router = express.Router()

const products = [];

router.get('/add-products',(req,res,next) => {
    res.render('add-products',{pageTitle:'Form', path:'/admin/add-products'})
    // res.send("<form action='/products' method='POST'><input type='text' name='title'/><button>Send</button></form>")
    // res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
})

router.post('/add-products',(req,res,next) => {
    products.push({title: req.body.title})

    const jsonString = JSON.stringify(req.body);
    fs.writeFileSync("message.txt", jsonString)
    res.redirect("/")
})

exports.router = router;
exports.products = products;