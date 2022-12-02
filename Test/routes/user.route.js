const express = require("express"); 
const users = express.Router();
const {createUser} = require('../controllers/userController');



users.post('/',  createUser);

module.exports=users;