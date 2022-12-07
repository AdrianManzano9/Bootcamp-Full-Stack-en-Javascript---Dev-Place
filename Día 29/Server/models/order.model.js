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
    total: Sequelize.INTEGER,
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
        total: Joi.required()
            .messages({
                'string.empty': "Falta el total",
                'any.required': "Falta el total"
            })
    });


    validateRequest(req, res, next, schema);
}


module.exports = { order, ValidateOrder };