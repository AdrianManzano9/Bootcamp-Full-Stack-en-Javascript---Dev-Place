var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');
const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

var User = sequelize.define('user', {
    surname: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: {
                msg: "Email valido",
            }
        },
    },
    password: Sequelize.STRING
});

const ValidateUser = (req, res, next) => {
    const schema = Joi.object({
        surname: Joi.string().min(3).max(30).required()
        .messages({
            'string.empty': "Ingresa el Nombre",
            'string.min': "El Nombre debe ser mayor a 3 caracteres",
            'any.required': "Ingresa el Nombre"
        }),
        email:Joi.string().email().required().messages({
            'email.empty': "Ingresa el email",
            'any.required': "Ingresa el email"
        }),
        password: Joi.string().min(5).max(50).required()
        .messages({
            'password.empty': "Ingresa el password",
            'password.min': "El password debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el password"
        }),
    });


    validateRequest(req, res, next, schema);
}


module.exports = {User, ValidateUser} ;