const Usuario = require("../models/Usuario.model")

const createUser = async (req, res) => {
    try {
        const modelData = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email
        }
        const response = await Usuario.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: "Usuario creado" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}

module.exports = createUser