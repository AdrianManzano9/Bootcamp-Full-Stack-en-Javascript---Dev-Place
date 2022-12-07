const express = require("express"); 
const {ValidateUser} = require("../models/usuario.model");
const {createUser,updateRolUser} = require('../controllers/usersController');
const {verifyToken} = require('../middlewares/authJwt')
const multer = require('multer')

const userRouter = express.Router();
const uploadMulter = multer({dest: 'udloads/'})

userRouter.post('/users', ValidateUser, createUser);


userRouter.patch('/img',verifyToken, uploadMulter.single('img'), updateRolUser)

module.exports = userRouter
