const express = require("express");
const app = express();
const database = require("./config/mysql")
const indexRoutes = require("./routes/index.route.js");
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);




database.authenticate()
.then(()=>{
    console.log('Conexion exitosa.')
}).catch(e =>{
    console.log('Error: '+e)
})



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo por el puerto ${process.env.PORT}`);
})

// Lautaro Rocha11:18
// npm i cors

// fede lanci11:18
// Yo usé npm i --save cors

// Lautaro Rocha11:18
// y en la app pone
// app.use(cors())
// antes lo declaras así const cors = require('cors')
