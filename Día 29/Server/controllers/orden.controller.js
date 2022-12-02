const {order} = require('../models/order.model')

const getOrders = async (req, res) => {
    const response = await order.findAll().then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

const createOrder = async (req,res)=>{
    const modelData = {
        direction: req.body.direction,
        time:  req.body.time,
        tPago:  req.body.tPago,
        total: req.body.total,
        nTarjeta:  req.body.nTarjeta,
        fTarjeta:  req.body.fTarjeta,
    }
    const response = await order.create(modelData).then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

module.exports = {getOrders,createOrder}