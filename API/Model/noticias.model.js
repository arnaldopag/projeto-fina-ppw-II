const mongoose = require("mongoose");

var Noticiaschemma = new mongoose.Schema({
    titulo: String,
    anoPublicacao: Number,
    anoVerificacao: Number,
    meteriaVerdadeira: Boolean,
    autor: String,
    portalPublicacao: String,
});

const Noticia = mongoose.model('Noticia', Noticiaschemma);
module.exports = Noticia;
