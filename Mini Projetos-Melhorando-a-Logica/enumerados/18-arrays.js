//Introdução a arrays
//add novos elementos
//encontrar elementos
//remover elementos
//dividir elementos
//dividir arrays
//combinar arrays


let numeros = [12, 45, 800]

//unshift - insere elemento no início do array
numeros.unshift(2121)
console.log(numeros)

//splice - insere elementos no meio
//escolhe a posição, o zero indica q n vai remover elementos
numeros.splice(1, 0, 'oto patamar')
console.log(numeros)

//push - insere elemento no final de um array
numeros.push('e-books')
console.log(numeros)

//pop - remove elementos no final de um array
numeros.pop()
console.log(numeros)

//shift - insere elementos no início de um array
numeros.shift('primeirão')
console.log(numeros)
console.log('---FIM---')

//procurando elementos dentro de um array
//indexof - busca o índice do elemento
let cesta = ['arroz', 'feijão', 'ovo', 50, 'carne', 'salada', 'suco', 222]
console.log(cesta.indexOf(222))

//includes - informa se existe ou não
console.log(cesta.includes(50))

//concat - concatenando arrays
let num1 = [1, 2, 3]
let num2 = [4, 5, 6]

let uniao = num1.concat(num2)

//slice - dividir o array
//inicia no índice 1, finaliza no índice 4(ele não aparece no resultado)
console.log('slicee: ', uniao.slice(1, 4))