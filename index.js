require("dotenv").config();
require("express-async-errors");
require("./API/DataBase");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const errorHundle = require("./API/Middlawares/errorHandler");
const rotas = require("./API/Router/rotas.noticias");

app.use(cors());
app.use(express.json());
app.use("api/", rotas);
app.use(errorHundle);

app.listen(PORT, () => {
    console.log(`O SERVIDOR ESTÁ RODANDO NA PORTA ${PORT}`);
});
