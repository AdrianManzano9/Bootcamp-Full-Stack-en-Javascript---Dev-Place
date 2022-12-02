const databaseMysql = require("./mysql.config");
const {order} = require("../models/order.model");
const product = require("../models/prod.model")

// order.BelongsToMany(product,{
//   foreignKey: "product",
//   as: "products",
// })

