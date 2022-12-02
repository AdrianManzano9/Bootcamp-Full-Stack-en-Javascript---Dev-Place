// npm init
// npm i express mongo mongoose nodemon

const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log("starting at 3000") //${3000}
})

// package.json -> "scripts": { "start": "nodemon index.js"}
// npm start para nodemon como config inicial

// account.mongodb.com/account/login -> desde cloud de mongo
// compass for mongo -> descargar y funcionar desde local

