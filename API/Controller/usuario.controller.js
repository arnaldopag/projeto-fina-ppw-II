const Usuario = require("../Model/usuario.model");

module.exports.getAll = async function (req, res) {
    let limite = parseInt(req.query.limite) || 2;
    let pular = parseInt(req.query.pular) || 0;

    if (!req.query.limite) {
        res.statusCode = 400;
        throw new Error("A consulta precisa ter limite");
    }

    let resultado = await Usuario.find().limit(limite).skip(pular);
    res.json(resultado);
};

module.exports.getOne = async function (req, res) {
    let resultado = await Usuario.findById(req.params.id);
    res.json(resultado);
};

module.exports.save = async function (req, res) {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json(album);
};

module.exports.update = async function (req, res) {
    let id = req.params.id;
    let body = req.body;
    let resultado = await Usuario.findByIdAndUpdate(id, body);
    res.json(resultado);
};

module.exports.delete = async function (req, res) {
    let id = req.params.id;
    let resultado = await Usuario.findByIdAndDelete(id);
    res.json(resultado);
};
