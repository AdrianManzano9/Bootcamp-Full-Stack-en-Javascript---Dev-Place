const {detOrder} = require("../models/detOrder.model")

const createDetOrder = async (req, res) => {
    const model = {
        
        orderId: req.body.orderId,
        cant: req.body.cant,
        precio: req.body.precio,
        descrip: req.body.descrip,
    }


    const response = await detOrder.create(model).then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);


}

module.exports = { createDetOrder }