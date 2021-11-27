const express = require('express')
const Usuario = require('../Model/usuario.model')
const rotas = express.Router()
const controller = require('../Controller/usuario.controller')


rotas.get('/',controller.getAll,)

rotas.get('/:id',controller.getOne)

rotas.post('/',controller.save)

rotas.put('/:id',controller.update)

rotas.delete('/:id',controller.delete)

module.exports = rotas;