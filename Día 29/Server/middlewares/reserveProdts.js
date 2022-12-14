const {Product}  = require('../models/prod.model');

const reserveProdts = async (req, res, next) => {
    try {
        
        const  id  = req.body.prodId;
        Product.findAll({
            where: { id: id }
        }).then((data) => {
            const modelData = {
                nombre: data.nombre,
                linkImg: data.linkImg,
                descrip: data.descrip,
                precio: data.precio,
                cant: 0,
                cantD: req.body.cantD,
            }
            const response = Product.update(modelData, {
                where: { id: id }
            }).then(() => {
                next()
            })
        })
       
    } catch (e) {
        console.log(e)
    }
}

module.exports = reserveProdts;


