const Op = require('./models/crud')
const db = require('./db/mongoose')

const user = new Op({
    name:'hello',
    email: 'hehe@xyz.com',
    password: 'qawerty'
}).save().then(()=> console.log('done'))