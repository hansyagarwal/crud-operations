const express = require('express')
const path = require('path')
const hbs = require('hbs')
const Op = require('./models/crud')
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

app.use(express.urlencoded())
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

app.post('/create',(req,res)=>{
    Op.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    },(error)=>{
        if(error){
            console.log(error)
            
        }
        res.render('create')
    })
    //console.log(username)
})

app.post('/read',(req,res)=>{
    Op.find({name: req.body.username},(err,doc)=>{
        if(err) {
            return res.send({error: 'error'})
        }

        console.log(doc)
        res.render('read')
    })
})

app.listen(port,()=>{
    console.log('Server is running on port: ' + port)
})

//run F:/mongodb/bin/mongod.exe --dbpath=F:/mongodb-data first