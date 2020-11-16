//operadores aritméticos(matemáticos)
//operadores atribuição
//operadores de comparação
//operadores lógicos
//operadores bitwise

//aritméticos +; -; *; / **
let salario = 3000
console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(salario ** salario)

//incremento e decremento
let idade = 19
console.log(idade++)
console.log(idade)
console.log(idade--)
console.log(idade)

//operadores de atribuição
let valorNoteBook = 5000
valorNoteBook += valorNoteBook //é o mesmo que valorNoteBook = valorNoteBook + valorNoteBook
console.log(valorNoteBook)

//operadores de igualdade estrita
console.log(1 === 1) //três iguais - true
console.log('1' === 1) //false

//igualdade solta
console.log(1 == 1) //dois iguais - true

//operador ternário
// cliente, 100 premium, se não será cliente comum
let pontos = 200
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

//operadores lógicos (&&)
//true se os dois operandos forem verdadeiros
console.log(false && true) //resultado false
// a opção ou som símbolo || mostra que um ou outro é verdadeiro ou falso
let maiorIdade = false
let temCarteiraDeTrabalho = false
let podeAplicar = maiorIdade || temCarteiraDeTrabalho
console.log('pode aplicar: ', podeAplicar)

//operador not (!)
let candidatoRecusado = !podeAplicar
console.log('candidato recusado', candidatoRecusado)

//comparações lógicas com valores não booleanos
// false || true - resultado true
// false || 'algum nome' - resultado rafael
//falsy - todos valores: undefined, null, 0, false, string vazia '', NaN not a number

//Truthy - ao contrário dos valores falsy
let corpoPersonalizado = ''
let corPadrao = 'azul'
let corPerfil = corpoPersonalizado || corPadrao
console.log('cor do perfil: ', corPerfil)
