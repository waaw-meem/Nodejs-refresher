const express = require('express')

const rootDir =  require("./../util/path")

const path = require('path')
const router = express.Router()

router.get("/",(req,res,next) => {
    console.log("Second Middleware")
    // res.send("Home Page")
    res.sendFile(path.join(rootDir,'views', 'shop.html'))
})

module.exports = router;