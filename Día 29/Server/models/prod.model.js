var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');

var product= sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    name: Sequelize.STRING,
    image:Sequelize.TEXT,
    descrip: Sequelize.STRING,
    precio: Sequelize.DOUBLE,
    cantD: Sequelize.INTEGER,
});

module.exports= product;