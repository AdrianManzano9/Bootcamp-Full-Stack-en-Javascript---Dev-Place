const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "Error, no hay Token de acceso" });
    }
    jwt.verify(token, process.env.SECRET, (err, decode) => {
        if (err) {
            return res.status(403).send({ message: "Error, Token de acceso no encontrado." });
        }
        req.userId = decode.id;
        next();
    })
}
isAdmin = (req, res, next) => {
    let id = req.userId
    User.findByPk(id, { attributes : ['admin'] }).then((user) => {
        if (user.admin) {
            next();
        } else {
            return res.status(403).send({ message: "No es Admin" });
        }
    })
}
module.exports = { verifyToken, isAdmin };