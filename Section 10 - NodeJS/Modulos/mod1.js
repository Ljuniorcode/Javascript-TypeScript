// const nome = "Luciano";
// const sobrenome = "Junior";

//n irá exibir undefined usando o retorno =>
// const falanome = () => `${nome}${sobrenome}`;

//exports aponta para module.exports
//é a mesma coisa que o modo antigo
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falanome = falanome;
// this.blablabla = "O que eu quiser exportar";

//antigo modo
// module.exports.nome = nome;
// module.exports.sobreNome = sobreNome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

//exportar na chave pessoa a classe pessoa
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

//tipos de exportação
// module.exports.nome = "Luciano";
// exports.Pessoa = Pessoa;
// this.sobrenome = "Qualquer coisa que vc quiser";

//exportando tudo de uma vez só
const nome = "Luciano";
const sobrenome = "Junior";

module.exports = {
  nome,
  sobrenome,
  Pessoa,
};
