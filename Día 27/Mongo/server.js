// import {productos} from "../../Día 17/individual/src/productos"

const express = require('express')
const mongoose = require('mongoose')

const app = express()


const Productos = mongoose.model('Productos',{
    id: Number,
    linkImg: String,
    nombre: String,
    descrip: String,
    precio: Number,
    cant: Number
})



app.get('/', (request, response) => {
    response.send('esto es un GET')
})

app.use(express.json())

app.listen(3000, () => {
    console.log("starting at 3000") //${3000}
})