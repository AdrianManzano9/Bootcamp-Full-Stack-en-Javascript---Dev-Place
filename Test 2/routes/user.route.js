const express = require("express"); 
const {ValidateUser} = require("../models/usuario.model");
const {createUser} = require('../controllers/usersController');

const userRouter = express.Router();


userRouter.post('/users', ValidateUser, createUser);

module.exports = userRouter
