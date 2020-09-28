require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

const mongoose = require("mongoose");
const connectString = "";
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conectei na base de dados");
    app.emit("Pronto");
  })
  .catch((e) => console.log(e));

//permite o aninhamento de objetos - o JSON que manda
//melhora o conteúdo das requisiçoes \0/
app.use(express.urlencoded({ extended: true }));

//conteúdo estáticos na pasta public
app.use(express.static(path.resolve(__dirname, "public")));

//add caminho absoluto para views
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

//exemplo de caminho relativo
//app.set("views", './src/views')

//diz ao express para usar as suas rotas
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Server run port 3000");
  });
});
