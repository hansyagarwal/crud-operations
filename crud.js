const Op = require('./models/crud')
const db = require('./db/mongoose')

// const u = document.querySelector('#username')
// const e = document.querySelector('#email')
// const p = document.querySelector('#password')

// document.querySelector('form').addEventListener('click',()=>{
//     const user = new Op({
//         name: u.value,
//         email: e.value,
//         password: p.value
//     }).save().then(()=>{
//         console.log('user created')
//     })
// })

// const user = new Op({
//     name:'hello',
//     email: 'hehe@xyz.com',
//     password: 'qawerty'
// }).save().then(()=> console.log('done'))