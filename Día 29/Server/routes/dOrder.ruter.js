const express = require('express');
const dOrderRouter = express.Router();
const {createDetOrder} = require('../controllers/detOrder.controller');
const {ValidateDetOrder} = require("../models/detOrder.model")
const reserveProdts = require('../middlewares/reserveProdts');

dOrderRouter.post('/',reserveProdts,createDetOrder);

module.exports= dOrderRouter