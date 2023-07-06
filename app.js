const http = require('http');

const rootDir = require('./util/path')

const bodyParsed = require('body-parser')  

const adminPanel = require('./routes/admin')
const userPanel = require('./routes/shop')
const errorController =  require("./controllers/error")

const { engine } = require("express-handlebars")

const express = require('express');
const path = require('path');
const app = express();

// Express Handlebars
app.engine('hbs',engine({layoutsDir:'views/layouts/', defaultLayout:'main-layout', extname:'hbs'}))
app.set('view engine','hbs')

app.set('view engine','ejs')

// Template Engine
app.set('view engine','pug')
app.set('views','views')

app.use(bodyParsed.urlencoded())
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminPanel)
app.use(userPanel)

app.use(errorController.errorMessage)


app.listen(3001);