//const nome = "Luciano";

//exporta e cria a variável
export const primeiroNome = "Arnaldo";
export const sobreNome = "Junior";
export const idade = 36;

export function soma(x, y) {
  return x + y;
}

//só pode ter um default/padrão por página
// export default function subtrair(x, y) {
//   return x - y;
// }

//melhor maneira para exportar as variaveis
export { nome as nomeAtual, sobreNome, idade, soma };

//podemos exportar classes

export class Pessoa {
  constructor(nome, idade, sexo) {
    (this.nome = nome), (this.idade = idade), (this.sexo = sexo);
  }
}

//exemplo, exportando uma classe por padrão

export default class Carro {
  constructor(nome, modelo, ano) {
    (this.nome = nome), (this.modelo = modelo), (this.ano = ano);
  }
}
