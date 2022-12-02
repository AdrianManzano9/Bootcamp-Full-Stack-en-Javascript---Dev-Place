var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (request, response) => {
    response.send('esto es un GET')
})

app.get('/algo/:algo',(req,res)=>{
    const x = req.params.algo;
    res.json({algo: x})
})

app.get('/algo/',(req,res)=>{
    res.json({

        name:req.query.name,
        surname:req.query.surname,
        email:req.query.email,
        time:req.query.time,
        tPago:req.query.tPago,
        nTarjeta:req.query.nTarjeta,
        fTarjeta:req.query.fTarjeta,
        total:req.query.total,
       
    })
})

// POST
app.post('/', (request, response) => {
    response.send('esto es un POST')
})



app.listen(3000, function() {
    console.log('App de ejemplo, escuchando en el 3000');
});