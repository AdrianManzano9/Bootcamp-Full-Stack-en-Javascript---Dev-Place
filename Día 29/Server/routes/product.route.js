const express = require("express");
const ProductRouter = express.Router();
const {getProds, createProd, findProdById, UpdateProdById, deleteProdById} = require('../controllers/prod.controller');
const {verifyToken,isAdmin} = require('../middlewares/authJwt')
const {ValidateProd} = require('../models/prod.model')

ProductRouter.get('/', getProds);
ProductRouter.post('/',verifyToken, isAdmin,ValidateProd, createProd);
ProductRouter.get('/:id', findProdById);
ProductRouter.put('/:id',verifyToken,isAdmin,ValidateProd, UpdateProdById);
ProductRouter.delete('/:id',verifyToken, isAdmin,deleteProdById);

module.exports=ProductRouter;


