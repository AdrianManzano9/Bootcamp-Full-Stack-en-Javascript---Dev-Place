const express = require('express');
const order = express.Router();
const {getOrders,createOrder} = require('../controllers/order.controller');
const {ValidateOrder} = require('../models/order.model')
const {verifyToken,isAdmin} = require('../middlewares/authJwt')

order.get('/',verifyToken,isAdmin, getOrders);
order.post('/',ValidateOrder,verifyToken, createOrder);

module.exports = order;