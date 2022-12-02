var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');
const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

var order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    direction: {
        type: Sequelize.STRING,
        require: true,
    },
    time: Sequelize.STRING,
    tPago: {
        type: Sequelize.STRING,
        require: true,
    },
    nTarjeta: Sequelize.INTEGER,
    fTarjeta: Sequelize.DATEONLY,
    total: Sequelize.INTEGER
}
    // , {
    //     defaultScope: {
    //         attributes: {
    //             exclude: ['fTarjeta','nTarjeta']
    //         }
    //     }
    // }
);



const ValidateOrder = (req, res, next) => {
    const schema = Joi.object({
        direction: Joi.string().min(3).max(200).required()
            .messages({
                'string.empty': "Ingresa tu Dirección",
                'string.min': "El Dirección debe ser mayor a 3 caracteres",
                'any.required': "Ingresa tu Dirección"
            }),
        tPago: Joi.required()
            .messages({
                'string.empty': "Ingresa el Tipo de pago",
                'any.required': "Ingresa el Tipo de pago"
            }),
        time: Joi.required()
            .messages({
                'string.empty': "Ingresa el Tipo de pago",
                'any.required': "Ingresa el Tipo de pago"
            }),
        nTarjeta: Joi.required()
            .messages({
                'string.empty': "Ingresa el Numero de tarjeta",
                'any.required': "Ingresa el Numero de tarjeta"
            }),
        fTarjeta: Joi.required()
            .messages({
                'string.empty': "Ingresa el Ingresa la fecha de tarjeta",
                'any.required': "Ingresa el Ingresa la fecha de tarjeta"
            }),
        total: Joi.required()
            .messages({
                'string.empty': "Falta el total",
                'any.required': "Falta el total"
            }),
        product: Joi.number().integer().required()
            .messages({
                'number.empty': "Ingresa la categoria del producto",
                'number.integer': "Ingresa la categoria del producto",
                'any.required': "Ingresa la categoria del producto"
            })
    });


    validateRequest(req, res, next, schema);
}


module.exports = { order, ValidateOrder };