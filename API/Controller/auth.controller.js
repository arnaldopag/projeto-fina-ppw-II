const jwt = require('jsonwebtoken')

module.exports.login = async (req, res, next) => {

    const {username, password} = req.body

    // valida credenciais do usuario
    if(!(username == process.env.APP_USERNAME && password == process.env.APP_PASSWORD)){
        res.statusCode = 401
        throw new Error("Usuário e/ou senha incorretos")
    }

    // Assinar um token para o usuario validado
    const payload = {
        sub: username
    }
    const options = {
        expiresIn: '30d'
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, options)

    res.json({
        loginToken: token
    })
}
