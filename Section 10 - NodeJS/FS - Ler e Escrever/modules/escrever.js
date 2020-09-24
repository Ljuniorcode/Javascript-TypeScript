const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" });
};

//sobre as flags
//a - append = adiciona dados ao arquivo
//w - irá apagar e escrever o conteúdo no arquivo

// const path = require("path");

// const caminhoArquivo = path.resolve(__dirname, "..", "teste.json");
//const caminhoArquivo = path.resolve(__dirname, "..", "teste.txt");

// const pessoas = [
//   { nome: "João" },
//   { nome: "Ana" },
//   { nome: "Gabi" },
//   { nome: "Rafael" },
//   { nome: "Olivia" },
// ];

//converte o objeto para json, usando espaços
// const json = JSON.stringify(pessoas, "", 2);

//substituir frase1 para o objeto json
// fs.writeFile(caminhoArquivo, json, { flag: "w" });

//escrever arquivo em uma pasta, obs o caminhoArquivo ".." acima
//sai do diretório atual, grava o conteudo frase1,
//flag w -> apaga o conteúdo caso ele já exista, enconding é o padrão pode retirar
//"Frase 1000\n" -> quebra a linha

//fs.writeFile(caminhoArquivo, "Frase 1000", { flag: "w" });
