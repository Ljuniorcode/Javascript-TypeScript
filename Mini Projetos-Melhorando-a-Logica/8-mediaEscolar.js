//Exercício nota escolar
//Obter a média a partir de um array

//0 - 59: F
//60 - 69: D
//70 - 79: C
//80 - 89: D
//90 - 100: A

const array = [90, 90, 90]

function mediaDoAluno(notas) {
  const media = calcularMedia(notas)
  if (media < 59) return 'F'
  if (media < 69) return 'D'
  if (media < 79) return 'C'
  if (media < 89) return 'D'
  return 'A'
}

function calcularMedia(array) {
  let soma = 0
  for (let valor of array) {
    soma += valor
  }
  return soma / (array.length)
}

console.log(mediaDoAluno(array))