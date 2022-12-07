const {User} = require("../models/usuario.model")
const bcrypt = require('bcrypt') 

const createUser = async (req, res) => {
    try {
        const modelData = {
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
        const response = await User.create(modelData)
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

module.exports= {createUser}