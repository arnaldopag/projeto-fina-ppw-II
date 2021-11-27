const mongoose = require('mongoose')

var usuarioSchemma = new mongoose.Schemma({
    nome : String,
    cpf : String,
    rg : String,
    email : String 
})

const Usuario = new Schemma('Usuario',usuarioSchemma)
module.exports = Usuario;