const express = require("express"); 
const users = express.Router();
const {getUser, createUser, findUserById, UpdateUserById, deleteUserById} = require('../controllers/users.controller');
const {ValidateUser} = require("../models/user.model");


users.get('/',  getUser);
users.post('/', ValidateUser, createUser);
users.get('/:id',  findUserById);
users.put('/:id', UpdateUserById);
users.delete('/:id', deleteUserById);

module.exports=users;