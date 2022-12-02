const Recurso = require('../models/Recurso.model')

const getRecursoById = async (req, res)=>{
    const { id } = req.params;
    const response = await Recurso.findAll({
        where: { id: id }
    }).then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}
const createRecurso = async (req, res) => {
    try {
        const response = await Recurso.create(req.params)  // Resibir el mensaje
            .then((data) => {
                const res = { error: false, data: data, message: "Recurso creado" }
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

const UpdateRecursoById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Recurso.update(req.body, {
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Recurso Actualizado" }
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
const deleteRecursoById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Recurso.destroy({
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

module.exports = {getRecursoById, createRecurso, UpdateRecursoById, deleteRecursoById}

