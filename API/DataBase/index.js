const mongoose = require('mongoose')
const URL = process.env.MONGOOSE_URL

const conexao = mongoose.connect(URL).then(function(){
    console.log("Conexão realizada com sucesso!")
})

module.exports = conexao