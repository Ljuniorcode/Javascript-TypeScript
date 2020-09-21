import {
  nome as nomeAtual,
  sobreNome,
  idade,
  soma,
  Pessoa as Colaborador,
} from "./modulo1";

//exemplo de como importar tudo e alterar o nome para moduloInteiro
import * as moduloInteiro from "./modulo1";

//exemplo da importação default do modulo1
//irá importar a função default subrair
//na importação de um default vc pode colocar qlqr nome
import oPadrao from "./modulo1";

//abaixo estamos importando o padrão e damos o nome de qlqrNome
//importamos nome e atribuímos como primeiroNome
import qlqrNome, { nome as primeiroNome, idade, soma } from "./modulo1";

console.log(nomeAtual);
console.log(soma(5, 5));

const p1 = new Pessoa("Ana", "Luiza");

// obs: usar o 'as' para renomear;
// Pessoa foi renomeado na desestruturação

//importando a classe carro, apenas o mnome
import Carro, { nome, ano } from "./modulo1";
const carro1 = new Carro(nome, ano);
console.log(carro1);
