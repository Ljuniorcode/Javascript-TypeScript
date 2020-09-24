const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escrever = require("./modules/escrever"); //importando o módulo
const ler = require("./modules/ler");

// const pessoas = [
//   { nome: "João" },
//   { nome: "Ana" },
//   { nome: "Gabi" },
//   { nome: "Rafael" },
//   { nome: "Olivia" },
// ];

//transforma o array de objetos em um arquivo json
//const json = JSON.stringify(pessoas, "", 2);

//escrever(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val.nome));
}

leArquivo(caminhoArquivo);
