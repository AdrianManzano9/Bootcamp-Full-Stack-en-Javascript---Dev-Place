const express = require("express"); 
const recurso = express.Router();
const {getRecursoById, createRecurso, UpdateRecursoById, deleteRecursoById} = require('../controllers/recursoController');



recurso.get('/:id',  getRecursoById);
recurso.post('/',  createRecurso);
recurso.put('/:id',  UpdateRecursoById);
recurso.delete('/:id', deleteRecursoById);

module.exports=recurso;