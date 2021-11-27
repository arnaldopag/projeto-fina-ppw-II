const express = require("express");
const rotas = express.Router();
const controller = require('../Controller/noticia.controller')

rotas.get('/', controller.getAll)

rotas.get('/:id',controller.getOne)

rotas.post('/', controller.save)

rotas.put('/:id',controller.update)

rotas.delete('/:id',controller.delete)

module.exports = rotas;