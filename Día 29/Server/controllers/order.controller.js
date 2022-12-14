const {Order} = require('../models/order.model')
const {DetOrder} = require('../models/detOrder.model')

const getOrders = async (req, res) => {
    const response = await Order.findAll({
        attributes: ['direction','time','tPago','total','UserId'],
        include:{
            model: DetOrder,
            as: "dOrders",
            attributes: ['cant','precio','descrip'],
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

const createOrder = async (req,res)=>{
    const modelData = {
        direction: req.body.direction,
        time:  req.body.time,
        tPago:  req.body.tPago,
        total: req.body.total,
        nTarjeta:  req.body.nTarjeta,
        fTarjeta:  req.body.fTarjeta,
        UserId: req.userId,
    }
    const response = await Order.create(modelData).then((data) => {
        const res = { error: false, data: data, message:"Orden enviada"  }
        return res;
    }).catch(error => {
        const res = { error: true, message: error}
        return res;
    });
    res.json(response);
}

module.exports = {getOrders,createOrder}