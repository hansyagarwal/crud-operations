const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:127.0.0.1:27017/crud',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})