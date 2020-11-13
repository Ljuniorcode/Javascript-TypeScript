//Divisível por 3 => retorna Fizz
//Divisível por 5 => retorna Buzz
//Divisível por 3 e 5 => retorna FizzBuzz
//Não divisível por 3 ou 5 => entrada
//Não é um número => 'Não é um número'

const resultado = fizBuzz(30)
console.log(resultado)

function fizBuzz(entrada) {
  if (typeof entrada !== 'number') return 'Não é um número'
  if (entrada % 3 === 0 && entrada % 5 === 0) return 'FizzBuzz'
  if (entrada % 3 === 0) return 'Fizz'
  if (entrada % 5 === 0) return 'Buzz'
  return entrada
}
