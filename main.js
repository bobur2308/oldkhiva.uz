const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const path = require('path')
const exphbs = require('express-handlebars')


// static folder
app.use(express.static(path.join(__dirname,'public')))

// body-parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// initialize template engine hbs
app.engine('.hbs', exphbs.engine({extname:'.hbs'}))
app.set('view engine', '.hbs')

app.use('/',require('./Routes/Routes'))


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))