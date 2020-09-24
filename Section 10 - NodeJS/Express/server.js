//importando módulo do express
const express = require("express");

//cria uma variável para executar o express
const app = express();

//CRUD (CRIAR,   LER, ATUALIZAR, APAGAR)
//CRUD (CREATE, READ, UPDATE, DELETE)
//CRUD (POST,    GET,    PUT, DELETE)

//rotas
//requisição
app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome" />
    <button>Enviar<button />
    </form/>
  `);
});

//respondendo o método de requisição acima
app.post("/", (req, res) => {
  res.send("Recebi o formulário!");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato");
});

app.listen(3000, () => {
  console.log("Server run port 3000");
});
