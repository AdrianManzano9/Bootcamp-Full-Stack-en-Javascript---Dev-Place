var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');

var product= sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    nombre: Sequelize.STRING,
    linkImg:Sequelize.TEXT,
    descrip: Sequelize.STRING,
    precio: Sequelize.DOUBLE,
    cant: Sequelize.INTEGER,
    cantD: Sequelize.INTEGER,
});

module.exports= product;