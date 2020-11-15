// O método Object.assign() é usado para copiar os valores de todas as
//  propriedades próprias enumeráveis de um 
// ou mais objetos de origem para um objeto destino.
//  Este método irá retornar o objeto destino.

const celular = {
  marcaCelular: 'asus',
  tamanhoTela: {
    vertical: 155,
    horizontal: 75
  },
  ligar: () => console.log('Fazendo ligação')
}

const novoObjeto = Object.assign({
  bateria: 5000,
  preco: 1200
}, celular)
// console.log(novoObjeto)

const objeto2 = { ...celular }
console.log('objeto2: ', objeto2)