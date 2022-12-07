const express = require('express');
const order = express.Router();
const {getOrders,createOrder} = require('../controllers/orden.controller');
const {ValidateOrder} = require('../models/order.model')
const {verifyToken} = require('../middlewares/authJwt')

order.get('/', getOrders);
order.post('/',ValidateOrder,verifyToken, createOrder);

module.exports = order;