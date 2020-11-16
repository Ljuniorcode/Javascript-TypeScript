//Criar uma função para mostrar os números primos
//Divisível por 1 ou por ele mesmo

//Primos
//Compostos

exibirNumerosPrimos(19)

function exibirNumerosPrimos(limite) {
  for (let numero = 2; numero <= limite; numero++) {

    if (numeroPrimo(numero)) console.log('Número primo: ', numero)
  }
}

//REFATORANDO O CÓDIGO

function numeroPrimo(numero) {

  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false
    }
  }
  return true
}