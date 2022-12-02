var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');


var Recurso = sequelize.define('recurso', {
    idRecurso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensaje: Sequelize.STRING,

});

module.exports = Recurso