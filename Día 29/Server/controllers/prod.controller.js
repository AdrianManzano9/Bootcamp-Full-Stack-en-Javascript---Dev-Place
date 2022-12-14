const {Product}  = require('../models/prod.model');
const {Category} = require('../models/category.model')
// const { ValidateProd } = require('../models/prod.model')


const getProds = async (req, res) => {
    const response = await Product.findAll({
        attributes:["id", "linkImg", "descrip", "precio", "cant", "cantD"],
        include:{
            model: Category,
            as: "categories",
            attributes: ['name','id'],
        }
    }).then((data) => {
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
        if (req.file === null) {
            return res.status(400).send({ message: 'Falta la Imagen' });
        }
        console.log(req.body)
        const url = req.protocol + '://' + req.get('host')
        const urlImage = url + '/upload/' + req.file.filename;
        const modelData = {
            linkImg: urlImage,
            descrip: req.body.descrip,
            precio: req.body.precio,
            cant: 0,
            cantD: req.body.cantD,
            CategoryId: req.body.CategoryId,
        }
        const response = await Product.create(modelData)
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
        const response = await Product.findAll({
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
        if (req.file === null) {
            return res.status(400).send({ message: 'Falta la Imagen' });
        }
        console.log(req.body)
        const url = req.protocol + '://' + req.get('host')
        const urlImage = url + '/upload/' + req.file.filename;
        const { id } = req.params;
        const modelData = {
            linkImg: urlImage,
            descrip: req.body.descrip,
            precio: req.body.precio,
            cant: req.body.cant,
            cantD: req.body.cantD,
            CategoryId: req.body.CategoryId,
        }
        const response = await Product.update(modelData, {
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Producto Actualizado" }
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

        const response = await Product.destroy({
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