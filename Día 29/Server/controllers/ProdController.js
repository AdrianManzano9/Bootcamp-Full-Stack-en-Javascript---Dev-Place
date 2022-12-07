const product  = require('../models/prod.model');
// const { ValidateProd } = require('../models/prod.model')


const getProds = async (req, res) => {
    const response = await product.findAll().then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

const createProd = async (req, res) => {
    try {
        const modelData = {
            nombre: req.body.nombre,
            linkImg: req.body.linkImg,
            descrip: req.body.descrip,
            precio: req.body.precio,
            cant: req.body.cant,
            cantD: req.body.cantD,
        }
        const response = await product.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: "Producto creado" }
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


const findProdById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await product.findAll({
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

const UpdateProdById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await product.update(req.body, {
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Prodeucto Actualizado" }
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

const deleteProdById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await product.destroy({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Producto borrado" }
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
module.exports = { getProds, createProd, findProdById, UpdateProdById, deleteProdById }