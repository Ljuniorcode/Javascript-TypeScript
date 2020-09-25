exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.homePost = (req, res) => {
  res.send("Pagina inicial do homePost");
};
