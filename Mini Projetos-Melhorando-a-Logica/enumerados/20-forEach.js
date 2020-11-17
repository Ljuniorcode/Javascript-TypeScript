
//forEach - percorre todo o array não alterando o principal
let numeros = [1, 5, 3, 45, 85, 9645, 545, 20, 48]

function multiplicaPorDois(item) {
  console.log(item * 2)
}

numeros.forEach(multiplicaPorDois)

//usando join - Transforma o array em um string e insere um símbolo ou caractere de separação
let num = [1, 2, 3, 4, 5]
let num2 = num.join('.')
console.log(num2)

//split - transforma uma strig em um array
let nome = 'Desenvolvedor Full Stack Javascript '
let resultado = nome.split(' ');
console.log(resultado)
