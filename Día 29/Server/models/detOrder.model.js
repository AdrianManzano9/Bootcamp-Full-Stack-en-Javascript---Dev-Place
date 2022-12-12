var Sequelize = require('sequelize');
var database = require('../config/mysql');
const validateRequest = require('../middlewares/validateRequest');
const Joi = require('joi');

var DetOrder = database.define('detalleOrden',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cant: Sequelize.INTEGER,
    precio: Sequelize.INTEGER,
    descrip: Sequelize.STRING,
})
const ValidateDetOrder = (req, res, next) => {
    const schema = Joi.object({
        cant: Joi.required()
        .messages({
            'string.empty': "Cantidad Indefinida",
            'any.required': "Cantidad Indefinida"
        }),
        precio: Joi.required()
        .messages({
            'string.empty': "Falta precio",
            'any.required': "Falta precio"
        }),
        descrip: Joi.required()
        .messages({
            'string.empty': "Falta descrip",
            'any.required': "Falta descrip"
        }),
    });
    validateRequest(req, res, next, schema);
}
module.exports= {DetOrder, ValidateDetOrder}