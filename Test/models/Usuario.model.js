var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');


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
        unique: true
    },
    premium: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = User