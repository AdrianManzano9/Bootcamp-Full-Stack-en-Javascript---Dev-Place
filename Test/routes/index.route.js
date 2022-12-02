const recursoRouter= require("./recurso.route");
const userRouter= require("./user.route");

const express = require("express");
const indexRoutes = express.Router();

indexRoutes.use('/recurso ',recursoRouter);
indexRoutes.use('/user',userRouter);

module.exports =indexRoutes;