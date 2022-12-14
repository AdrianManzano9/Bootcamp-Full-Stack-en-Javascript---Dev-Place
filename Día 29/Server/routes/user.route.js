const express = require("express"); 
const users = express.Router();
const {getUser, createUser, findUserById, UpdateUserById, deleteUserById} = require('../controllers/users.controller');
const {verifyToken,isAdmin} = require('../middlewares/authJwt')
const {ValidateUser} = require("../models/user.model");


users.get('/',verifyToken,isAdmin,  getUser);
users.post('/', ValidateUser, createUser);
users.get('/:id',verifyToken,isAdmin,  findUserById);
users.put('/:id',verifyToken,isAdmin,  UpdateUserById);
users.delete('/:id',verifyToken,isAdmin,  deleteUserById);

module.exports=users;