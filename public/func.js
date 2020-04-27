//const mongoose = require('mongoose')
const Op = require('../models/crud').Op

const main = document.q

document.querySelector('form').addEventListener('submit',(err)=>{
    err.preventDefault()
    console.log('submit')
    const name = document.querySelector('#username').value
    const e = document.querySelector('#email').value
    const p = document.querySelector('#password').value

    Op.create({
        name: name,
        email: e,
        password: p
    },(eo)=>{
        if(eo) {
            console.log('error')
        }
    })
})