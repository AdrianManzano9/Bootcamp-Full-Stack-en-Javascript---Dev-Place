const express = require('express');
const order = express.Router();
const {getOrders,createOrder} = require('../controllers/orden.controller');
const {ValidateOrder} = require('../models/order.model')

order.get('/', getOrders);
order.post('/',ValidateOrder, createOrder);

module.exports = order;