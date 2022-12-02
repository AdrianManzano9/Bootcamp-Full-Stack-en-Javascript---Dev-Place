const express = require("express");
const product = express.Router();
const {getProds, createProd, findProdById, UpdateProdById, deleteProdById} = require('../controllers/ProdController');
const {verifyToken,isAdmin} = require('../middlewares/authJwt')

product.get('/', getProds);
product.post('/',verifyToken, isAdmin, createProd);
product.get('/:id', findProdById);
product.put('/:id',UpdateProdById);
product.delete('/:id',deleteProdById);

module.exports=product;


