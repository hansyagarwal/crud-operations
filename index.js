const express = require('express')
const path = require('path')
const hbs = require('hbs')
require('./db/mongoose')
require('./crud')

const app = express()
const port = process.env.PORT || 3000

const mainPage = path.join(__dirname,'/public')
const viewsPath = path.join(__dirname,'/public/views')
const partialsPath = path.join(__dirname,'/public/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(mainPage))

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/create',(req,res)=>{
    res.render('create')
})

app.get('/read',(req,res)=>{
    res.render('read')
})

app.get('/update',(req,res)=>{
    res.render('update')
})

app.get('/delete',(req,res)=>{
    res.render('delete')
})
app.listen(port,()=>{
    console.log('Server is running on port: ' + port)
})

//run F:/mongodb/bin/mongod.exe --dbpath=F:/mongodb-data first