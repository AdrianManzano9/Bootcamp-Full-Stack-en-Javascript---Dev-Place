const express = require("express"); 
const loginRout = express.Router();
const login=require("../controllers/auth.controller")

loginRout.post('/',login);

module.exports=loginRout;