//função que gera um nº aleatório
function numAleatorio(min, max){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max-min) + min)
}

//função com 2 parâmetros e uma promise
//Promise - trabalha de forma assíncrona
function aguarde(msg, tmp){
  //usando promise, chamando um construtor
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject (new Error('Deu ruim'))

    setTimeout(() => {
      resolve(msg) //resolvendo o cód.
    }, tmp)
  })
}

// Encadeamento
aguarde('Conectando ao BD...', numAleatorio(1,3))
  .then(resposta => {
    console.log(resposta)
    return aguarde('Acessando informações', numAleatorio(1,3))
  })
  .then(resposta => {
    console.log(resposta)
    //simule um erro abaixo para verificar o catch()
    return aguarde(1234, numAleatorio(1,3))       
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Exibindo dados na tela.')
  })
  .catch(e => console.log('Erro: ', e))

  console.log('Exibido antes de qualquer promise')

// ***** RASCUNHO PARA RELEMBRAR *****

// Math.floor() - retorna o menor nº inteiro
// Math.random() - retorna um número aleatório
// setTimeout() - executa em milisegundos

// Parâmetros da Promise(resolve, reject)
// resolve - se o cod. rodou, ele irá resolver
// reject - deu erro, o reject entra em ação

// resolve - será executado com o .then()
// reject - será executado com o .catch()

// calback - quando um cód. terminar, irá chamar uma função callback

// function aguarde(msg, tmp, callback){
//   setTimeout(() => {
//     console.log(msg)
//     if(callback) callback()
//   }, tmp)
// }

// callback iria virar uma árvore de natal - método ruim
// estudar e praticar 3 - só irá ser chamado com a 2 finalizar

// aguarde('Estudar e praticar 1',numAleatorio(1,3), function(){
//   aguarde('Estudar e praticar 2',numAleatorio(1,3), function(){
//     aguarde('Estudar e praticar 3',numAleatorio(1,3), function(){
//     })
//   })
// })