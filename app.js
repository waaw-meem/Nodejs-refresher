const http = require('http');

const rootDir = require('./util/path')

const bodyParsed = require('body-parser')  

const adminPanel = require('./routes/admin')
const userPanel = require('./routes/shop')

const express = require('express');
const path = require('path');
const app = express();

app.use(bodyParsed.urlencoded())
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminPanel)
app.use(userPanel)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404page.html'))
})


app.listen(3000);