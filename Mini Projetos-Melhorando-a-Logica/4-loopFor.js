//tipos de laços: for; while; do while; for in; for of

// 1 - for
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log('Ímpar', i)
//   } else {
//     console.log('Par', i)
//   }
// }

//2 - while
// let i = 5
// while (i >= 1) {
//   if (i % 2 !== 0) console.log(i)
//   i--
// }

// 3 - do while
let i = 0
do {
  console.log('Executando', i)
  i++
} while (i < 4)

// 4 - for in
//itera sobre propriedades de objetos. lê as chaves
let pessoa = {
  nome: 'estudante',
  idade: 36
}
for (chave in pessoa) {
  console.log('a chave de pessoa é: ', chave)
}

//5 - for of, lê os valores das chaves, iteração sobre arrays
let cores = ['amarelo', 'vermelho', 'branco', 'azul', 'marrom']
for (let indice of cores) console.log('cores: ', indice)