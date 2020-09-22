//importando arquivo/módulos
// const mod1 = require("./mod1");
// console.log(mod1.falanome());

//importar apenas a chave nome
// const mod2 = require("./mod1").nome;
// console.log(mod2);

//usando desestruturação
// const { nome, sobrenome, falanome } = require("./mod1");
// console.log(nome());
// console.log(sobrenome());
// console.log(falanome());

//importando a classe Pessoa usando desestruturação
// const { Pessoa } = require("./mod1");
// const p1 = new Pessoa("Luciano");
// console.log(p1);

//usando com o módulo path, inicialize um projeto: npm init -y
//instalar e usar o axios
const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");

const p1 = new Pessoa("João");
console.log(p1);
// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
//   .then((res) => console.log(res.data))
//   .catch((e) => console.log(e));

console.log(Pessoa);
