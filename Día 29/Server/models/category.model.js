var Sequelize = require('sequelize');
var database = require('../config/mysql');
const validateRequest = require('../middlewares/validateRequest');
const Joi = require('joi');

var Category = database.define('category',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,

})

const ValidateCategory = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(30).required()
        .messages({
          'string.empty': "Ingresa el Nombre  de la categoria",
          'string.min': "El nombre de la categoria debe ser mayor a 2 caracteres",
          'any.required': "Ingresa el Nombre  de la categoria"
        })
    });
    validateRequest(req, res, next, schema);
  };
  
  module.exports = {Category,ValidateCategory}