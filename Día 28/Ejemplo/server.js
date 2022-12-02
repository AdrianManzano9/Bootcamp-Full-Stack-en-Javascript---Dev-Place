const express = require("express");
const app = express();
const router = express.Router();
const port = 5050;
const userRouter = require('./routes/users.route');

/**Cadena conexion con mongo */
const mongose = require('mongoose');
mongose.connect('mongodb+srv://admin:admin@cluster0.g7pvjky.mongodb.net/test')
    .then(() => console.log("Conect MongoDB"))
    .catch((err) => {
        console.error(err)
    });
/**Fin de cadena conexion */ 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})