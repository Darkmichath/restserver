const { response } = require('express')


const usuariosGet = (req, res = response) => {

    const {q , nombre= 'No Name', page = 1,limit = 10} = req.query;

    res.status(200).json({
        msg: 'get api controller',
        q,
        nombre,
        page,
        limit
    })
}
const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;

    res.status(200).json({
        msg: 'post api controller',
        nombre,
        edad
    })
}
const usuariosPut = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        msg: 'put api controller',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.status(200).json({
        msg: 'delete api controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}