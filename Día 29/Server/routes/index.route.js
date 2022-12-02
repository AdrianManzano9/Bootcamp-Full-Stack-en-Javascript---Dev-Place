const ProductRouter= require("./product.route");
const UsersRouter= require("./user.route");
const OrderRouter = require('./order.route')
const loginRout = require('./login.route')

const express = require("express");
const indexRoutes = express.Router();

indexRoutes.use('/product',ProductRouter);
indexRoutes.use('/user',UsersRouter);
indexRoutes.use('/order',OrderRouter);
indexRoutes.use('/login',loginRout);

module.exports=indexRoutes;


