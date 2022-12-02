// //cargamos un modulo http
// var http = require("http");

// //creacion del server http, y se define la escucha
// http.createServer(function(request, response) {
//     //definir el header http, el status http, el content
//     response.writeHead(200, {
//         'Content-Type': 'contentType/json' //'text/plain', 'contentType/xml'
//     });
//     // luego respondemos en el body
//     response.end('Hola mundo!');
//     console.log("Hola mundo!")
// }).listen(8000);

//se escribe la url con acceso al server
console.log('url: http://127.0.0.1:3000/');
const express = require('express');



// GET
app.get('/', (request, response) => {
    response.send('esto es un GET')
})

app.get('/algo/',(req,res)=>{
    res.json({
        name: req.body.name,
        // 'surname': req.body.surname,
        // 'email': req.body.email,
        // 'time': req.body.time,
        // 'tPago': req.body.tPago,
        // 'nTarjeta': req.body.nTarjeta,
        // 'fTarjeta': req.body.fTarjeta,
        // 'total': req.body.total,
       
    })
})

app.get('/algo/:algo',(req,res)=>{
    const x = req.params.algo;
    res.json({algo: x})
})

// POST
app.post('/', (request, response) => {
    response.send('esto es un POST')
})

// app.get('/', function(request, response) {
//     response.send("otro hola mundo!");
// });


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(3000, function() {
    console.log('App de ejemplo, escuchando en el 3000');
});


// //configuracion
// const express = require('express')
// const app = express()

// app.get('/', (peticion, respuesta) => {
//     respuesta.send("hola");
// })


// // GET
// app.get('/', (request, response) => {
//     response.send('esto es un GET')
// })

// // POST
// app.post('/', (request, response) => {
//     response.send('esto es un POST')
// })