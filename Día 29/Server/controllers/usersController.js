const {User} = require('../models/user.model')
const {order} = require('../models/order.model')
const {detOrder} = require('../models/detOrder.model')
const {product} = require('../models/prod.model')
const bcrypt = require('bcrypt')

const getUser = async (req, res)=>{
    const response = await User.findAll({
        include:[
        {
            model: order,
            as: "orders",
            attributes: ['direction','time','tPago','total'],
            include:{
                model: detOrder,
                as: "dOrders",
                attributes: ['cant','precio','descrip'],
            }
        }],
        attributes: ['name','surname','email','admin']
    } ).then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

const createUser = async (req, res) => {
    try {
        const modelData = {
            name: req.body.name,
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



const findUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Products.findAll({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

const UpdateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await User.update(req.body, {
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Usuario Actualizado" }
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

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await User.destroy({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Usuario borrado exitosamente" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}
module.exports = { getUser, createUser, findUserById, UpdateUserById, deleteUserById }

