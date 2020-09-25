const express = require("express");
const route = express.Router();
const homecontroller = require("./src/controllers/homeController"); //importando o arquivo
const contatoController = require("./src/controllers/contatoController");

//usar a variável que importa o arquivo com a função criada dentro dele
//rotas da home
route.get("/", homecontroller.paginaInicial);
route.post("/", homecontroller.homePost);

//rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
