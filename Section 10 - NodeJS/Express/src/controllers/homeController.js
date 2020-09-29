// const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "Titulo de testes 02",
//   descricao: "Descrição de teste 02.",
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  //req.session.usuario = { nome: "luciano", logado: true };
  //req.flash('info', 'Hello World')
  //req.flash('error', 'Vixx Deu ruim')

  res.render("index", {
    titulo: "Título da página",
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
};

exports.homePost = (req, res) => {
  res.send("Pagina inicial do homePost");
};
