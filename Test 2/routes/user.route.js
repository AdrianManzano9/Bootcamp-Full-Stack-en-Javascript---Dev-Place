const express = require("express"); 
const {ValidateUser} = require("../models/usuario.model");
const {createUser,updateRolUser} = require('../controllers/usersController');
const {verifyToken} = require('../middlewares/authJwt')

const userRouter = express.Router();


userRouter.post('/users', ValidateUser, createUser);
userRouter.patch('/img',verifyToken, uploadMulter.single('img'), updateRolUser)

module.exports = userRouter
