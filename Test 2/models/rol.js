var Sequelize = require('sequelize');
var database = require('../config/mysql');

var rol = database.define('rol', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING
});
module.exports = rol;