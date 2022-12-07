const database = require("./mysql");
const {order} = require("../models/order.model");
const product = require("../models/prod.model")
const {detOrder} = require("../models/detOrder.model")
const {User} = require('../models/user.model')

User.hasMany(order,{
  foreignKey: "UserId",
  as: "orders",
})
order.hasMany(detOrder,{
  foreignKey: "orderId",
  as: "dOrders",
})

order.sync();
product.sync();
detOrder.sync();
User.sync()

database.sync();