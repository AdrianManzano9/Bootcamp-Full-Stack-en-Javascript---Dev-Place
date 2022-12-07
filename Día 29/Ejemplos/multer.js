// npm i express multer body-parser

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.json({message: 'bienvenido'})
});

app.listen(3000, () => {
    console.log('iniciando..')
})

// guardar con Multer: definimos ubicacion, lugar de almacenamiento, id para archivos
var storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, 'subidas')
    },
    filename: function(request, file, callback) {
        callback(null, filename.fieldname + "-" + Date.now())
    }
});
var upload = multer({ storage: storage });

//Subiendo un archivo
app.post("/uploadFile", upload.single('archivo1'), (request, response, next) => {
    // let img = fs.readFileSync(request.file.path);
    const file = request.file;
    if(!file) {
        const error = new Error('No hay archivo');
        error.httpStatusCode = 400;
        return next(error);
    }
    response.send(file);
});

