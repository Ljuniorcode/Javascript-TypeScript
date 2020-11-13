//receber uma quantia de valores para avaliar
//função exibe se cada valor é par ou ímpar

// exibeTipo(19)

// function exibeTipo(num) {
//   if (num % 2 === 0) {
//     console.log(num, 'é par')
//   } else console.log(num, 'é ímpar')
// }

//ou

function exibirParOuImpar(numero) {
  for (let i = 0; i < numero; i++)
    if (i % 2 === 0)
      console.log(i, 'é par')
    else console.log(i, 'é ímpar')
}
exibirParOuImpar(19)