const http = require('http');
const fs = require('fs')
const bodyParsed = require('body-parser')  

const express = require('express')
const app = express();

app.use(bodyParsed.urlencoded())

app.use('/',(req,res,next) => {
    console.log("Always Run")
    next()
})

app.use("/",(req,res,next) => {
    console.log("Second Middleware")
    res.send("Home Page")
})


app.use((req,res,next) => {
    res.status(404).send('<h2>Page Not Found</h2>')
})


app.listen(3000)