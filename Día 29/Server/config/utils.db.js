const database = require("./mysql");
const {Order} = require("../models/order.model");
const {Product} = require("../models/prod.model")
const {DetOrder} = require("../models/detOrder.model")
const {User} = require('../models/user.model')
const {Category} = require('../models/category.model')

User.hasMany(Order,{
  foreignKey: "UserId",
  as: "orders",
})
Order.hasMany(DetOrder,{
  foreignKey: "orderId",
  as: "dOrders",
})
Product.belongsTo(Category, {
  foreignKey: "CategoryId",
  as: "categories",
});


Order.sync();
Product.sync();
DetOrder.sync();
User.sync()
Category.sync()

database.sync();