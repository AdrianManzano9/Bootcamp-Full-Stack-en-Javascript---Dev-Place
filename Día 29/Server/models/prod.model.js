var Sequelize = require('sequelize');
var database = require('../config/mysql');
const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

var Product = database.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    linkImg: Sequelize.TEXT,
    descrip: Sequelize.STRING,
    precio: Sequelize.DOUBLE,
    cant: Sequelize.INTEGER,
    cantD: Sequelize.INTEGER,
    CategoryId: Sequelize.INTEGER,
});
const ValidateProd = (req, res, next) => {
    const schema = Joi.object({
        descrip:  Joi.string().min(3).max(100).required()
        .messages({
            'string.empty': "Ingresa una descripcion",
            'string.min': "El descripcion debe ser mayor a 3 caracteres",
            'string.max': "El descripcion debe ser menor a 100 caracteres",
            'any.required': "Ingresa una descripcion"
        }),
        precio:Joi.number().required().min(0)
        .messages({
            'any.empty': "Falta el precio",
            'any.required': "Falta el precio",
            'number.min': "El precio debe ser un numero positivo",
        }),
        cantD: Joi.number().integer().required().min(0)
        .messages({
            'any.empty': "Falta la cantidad disponible",
            'number.integer': "La cantidad disponible debe ser un entero",
            'number.min': "La cantidad disponible debe ser un numero positivo",
        }),
        CategoryId: Joi.required()
    });
    validateRequest(req, res, next, schema);
}
module.exports = {Product, ValidateProd};