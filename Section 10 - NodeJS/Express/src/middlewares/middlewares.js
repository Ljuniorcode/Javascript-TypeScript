// Middleware é todo o tipo de função que está entre um pedido HTTP e
// a resposta final que o servidor envia de volta para o cliente.

exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "Este é o valor da variável local";
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === "EBADCSRFTOKEN") {
    //podemos renderizar uma página para erro abaixo res.render('404')
    return res.send("BAD CSRF");
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrf = req.csrfToken();
  next();
};
