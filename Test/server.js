const express = require("express");
const app = express();
const port = 5050;
const database = require("./config/mysql")
const indexRoutes = require("./routes/index.route");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);




database.authenticate()
.then(()=>{
    console.log('Conexion exitosa.')
}).catch(e =>{
    console.log('Error: '+e)
})



app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})