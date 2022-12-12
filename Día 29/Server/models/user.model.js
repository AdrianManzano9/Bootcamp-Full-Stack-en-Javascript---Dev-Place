var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');
const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Ya hay una cuenta registrada con este mail. Intenta iniciar sesión.',
            fields: [sequelize.fn('lower', sequelize.col('email'))]
        },
        validate: {
            isEmail: {
                msg: "Email valido",
            }
        },
    },
    password: Sequelize.STRING,
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    indexes: [{
        fields: ['email'],
        unique: true,
    }]
});

const ValidateUser = (req, res, next) => {
    const schema = Joi.object({
        name:  Joi.string().min(3).max(30).required()
        .messages({
            'string.empty': "Ingresa el Nombre",
            'string.min': "El nombre debe ser mayor a 3 caracteres",
            'string.max': "El nombre debe ser menor a 30 caracteres",
            'any.required': "Ingresa el Nombre"
        }),
        surname: Joi.string().min(3).max(30).required()
        .messages({
            'string.empty': "Ingresa el Apellido",
            'string.min': "El Apellido debe ser mayor a 3 caracteres",
            'string.max': "El nombre debe ser menor a 30 caracteres",
            'any.required': "Ingresa el Apellido"
        }),
        email:Joi.string().email().required().messages({
            'email.empty': "Ingresa el email",
            'any.required': "Ingresa el email"
        }),
        password: Joi.string().min(5).max(50).required()
        .messages({
            'string.empty': "Ingresa una contraseña",
            'string.min': "La contraseña debe ser mayor a 5 caracteres",
            'string.max': "El nombre debe ser menor a 50 caracteres",
            'any.required': "Ingresa una contraseña"
        }),
    });


    validateRequest(req, res, next, schema);
}


module.exports = {User, ValidateUser} ;




//


// const validateRequest = require('../../middlewares/validateRequest');


//     validateRequest(req, res, next, schema);
// }
