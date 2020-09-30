require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middlewares");

//configurando a sessão
const sessionOptions = session({
  secret: "asdf a6s4fa6s1f3as2d1f",
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

const mongoose = require("mongoose");
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

app.use(sessionOptions);
app.use(flash());

app.use(csrf());
app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(checkCsrfError);

//permite o aninhamento de objetos - o JSON que manda
//melhora o conteúdo das requisiçoes \0/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
