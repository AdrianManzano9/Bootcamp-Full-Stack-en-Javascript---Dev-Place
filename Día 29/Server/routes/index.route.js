const ProductRouter= require('./product.route');
const UsersRouter= require('./user.route');
const OrderRouter = require('./order.route')
const loginRout = require('./login.route')
const dOrderRouter = require('./dOrder.route')
const categoryRouter = require('./category.route')

const express = require("express");
const indexRoutes = express.Router();

indexRoutes.use('/product',ProductRouter);
indexRoutes.use('/user',UsersRouter);
indexRoutes.use('/order',OrderRouter);
indexRoutes.use('/login',loginRout);
indexRoutes.use('/dOrder',dOrderRouter);
indexRoutes.use('/category',categoryRouter);


module.exports=indexRoutes;


