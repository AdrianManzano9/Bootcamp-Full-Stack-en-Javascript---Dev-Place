const express = require('express')
const categoryRouter = express.Router();
const {ValidateCategory} = require('../models/category.model')
const categoryController = require('../controllers/category.controller')

categoryRouter.get('/', categoryController.getCategory)
categoryRouter.get('/:id', categoryController.getCategoryById)
categoryRouter.post('/',ValidateCategory, categoryController.createCategory)
categoryRouter.delete('/', categoryController.deleteCategory)

module.exports = categoryRouter;