var dotenv=require('dotenv');
const sequelize = require('sequelize');
dotenv.config();

const database = new sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    
}
);

module.exports = database;