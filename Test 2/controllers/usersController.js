const {User} = require("../models/usuario.model")
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const modelData = {
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            rol: 1
        }
        User.create(modelData);
        var tokenAccess= jwt.sign({surname: modelData.surname},process.env.SECRET,{
            expiresIn:86400
        });
        res.status(200).send({
            tokenAccess
        })  
    } catch (e) {
        console.log(e)
    }
}
const updateRolUser=async (req, res)=>{
    
    User.findAll({
        where: { surname: req.userSurname }
    }).then((data) => {
        const modelData = {
            email: data.email,
            password: data.password,
            rol: 2
        }
        const response = User.update(modelData, {
            where: { surname: req.userSurname }
        })((data) => {
            const res = { error: false, data: data, message: "Rol actualizado" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    })

}
module.exports= {createUser, updateRolUser}