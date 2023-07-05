const http = require('http');

const rootDir = require('./util/path')

const bodyParsed = require('body-parser')  

const adminRoutes = require('./routes/admin')
const userPanel = require('./routes/shop')

const { engine } = require("express-handlebars")

const express = require('express');
const path = require('path');
const app = express();

// Express Handlebars
app.engine('hbs',engine())
app.set('view engine','hbs')

// Template Engine
app.set('view engine','pug')
app.set('views','views')

app.use(bodyParsed.urlencoded())
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes.router)
app.use(userPanel)

app.use((req,res,next) => {
    res.status(404).render('404page',({pageTitle:'404 Page'}))
    // res.status(404).sendFile(path.join(rootDir,'views','404page.html'))
})


app.listen(3002);