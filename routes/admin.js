const express = require('express')
const fs = require('fs')

const rootDir =  require("./../util/path")

const path = require('path')

const router = express.Router()


router.get('/add-products',(req,res,next) => {
    // res.send("<form action='/products' method='POST'><input type='text' name='title'/><button>Send</button></form>")
    res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
})

router.post('/products',(req,res,next) => {
    console.log(req.body)
    const jsonString = JSON.stringify(req.body);
    fs.writeFileSync("message.txt", jsonString)
    res.redirect("/")
})

module.exports = router;