const express = require("express");
const app = express();

//aquilo que vier do formulário web será tratado
//post
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome" />
    <button>Enviar<button />
    </form/>
  `);
});

// req.params/route params - partes que vem na rota da url
// ex: profiles/3 ou /users/1

// req.query - parâmetros enviados com ?
// ex: profiles/?chave1=valor1&chave2=valor2

// req.body - dados que vem do corpo da requisição, rotas post e put
// ex: formulário de cadastro, contato, login
// ex: {'nome':'Luciano', 'email':'lucianome@dominio.com'}

app.get("/testes/:id?/:param?", (req, res) => {
  console.log(req.params);
  console.log(req.params.id); //buscando id

  console.log(req.query);

  res.send(req.params);
});

//respondendo o método de requisição acima
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Server run port 3000");
});
