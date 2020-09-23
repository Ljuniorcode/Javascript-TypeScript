//importando multiplicacao do mod1
// const multiplicacao = require("./mod1");
// console.log(multiplicacao(2, 2));

//importando classe cachorro
const classCachorro = require("./mod1");

//usando o módulo latir da classe cachorro
const dogg = new classCachorro("trovao");
dogg.latir();

//praticando buscas, caminho absoluto
//nome da pasta atual onde estamos
//console.log(__dirname)

//nome do arquivo atual
//console.log(__filename)

//módulo padrão do node - path
//o path se vira e cria o caminho correto
const path = require("path");
//console.log(path.resolve(__dirname)); // -> exibe o diretório atual de onde estamos
console.log(path.resolve(__dirname, "..", "..")); // -> neste caminho irá voltar duas pastas

//voltando duas pastas e entrando no diretório arquivos e em seguida imagens
console.log(path.resolve(__dirname, "..", "..", arquivos, imagens));
