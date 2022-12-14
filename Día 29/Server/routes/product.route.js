const express = require("express");
const ProductRouter = express.Router();
const {getProds, createProd, findProdById, UpdateProdById, deleteProdById} = require('../controllers/prod.controller');
const {verifyToken,isAdmin} = require('../middlewares/authJwt')
const {ValidateProd} = require('../models/prod.model')
const uploadMulter = require('../config/multer.config')

ProductRouter.get('/', getProds);
ProductRouter.post('/',verifyToken,isAdmin,[uploadMulter.single('file'),ValidateProd], createProd);
ProductRouter.get('/:id', findProdById);
ProductRouter.put('/:id',verifyToken,isAdmin,[uploadMulter.single('file'),ValidateProd], UpdateProdById);
ProductRouter.delete('/:id',verifyToken, isAdmin,deleteProdById);

module.exports=ProductRouter;


