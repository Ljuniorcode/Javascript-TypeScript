const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Titulo de testes 02",
  descricao: "Descrição de teste 02.",
})
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.homePost = (req, res) => {
  res.send("Pagina inicial do homePost");
};
