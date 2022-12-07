const database = require("./mysql");
const { User } = require("../models/usuario.model")
const rol = require("../models/rol")

User.belongsTo(rol, {
    foreignKey: "rol",
    as: "rols",
});

rol.sync()
User.sync()
database.sync().then(() => {
    rol.create({ id: 1, name: "comun" });
    rol.create({ id: 2, name: "premiun" });
});