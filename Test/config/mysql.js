
const sequelize = require('sequelize')


const database = new sequelize('test2','root','',{
    host:'localhost',
    dialect:'mysql'
}
);
database.sync();

module.exports = database;