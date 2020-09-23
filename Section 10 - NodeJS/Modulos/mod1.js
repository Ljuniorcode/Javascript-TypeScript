///praticando com funções
// module.exports = function (x, y) {
//   return x * y;
// };

//praticando com classes
module.exports = class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }
  latir() {
    console.log(`O ${this.nome} está latindo!`);
  }
};
