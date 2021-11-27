const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const header = req.headers.authorization;

    if (!header) {
        res.statusCode = 400;
        throw new Error("VOCE PRECISA DE UMA AUTORIZAÇÃO");
    }

    const token = header.split("Bearer ")[1];
    console.log(token);
    if (!token) {
        res.statusCode = 400;
        throw new Error(
            "A AUTORIZAÇÃO NÃO ESTA NO FORMATO CORRETO. INSIRA CORRETAMENTE"
        );
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload.sub;

    next();
};
