const express = require('express')
const categoryRouter = express.Router();
const {ValidateCategory} = require('../models/category.model')
const categoryController = require('../controllers/category.controller')
const {verifyToken,isAdmin} = require('../middlewares/authJwt')

categoryRouter.get('/', categoryController.getCategory)
categoryRouter.get('/:id', categoryController.getCategoryById)
categoryRouter.post('/',verifyToken,isAdmin, ValidateCategory, categoryController.createCategory)
categoryRouter.put('/:id',verifyToken,isAdmin,ValidateCategory, categoryController.UpdateCategoryById)
categoryRouter.delete('/:id',verifyToken,isAdmin, categoryController.deleteCategory)

module.exports = categoryRouter;