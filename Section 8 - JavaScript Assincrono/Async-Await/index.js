function numAleatorio(min=0, max=3){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max-min) + min)
}

function aguarde(msg, tmp){
  
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject (new Error('Deu ruim'))

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise') //resolvendo o cód.
    }, tmp)
  })
}

// Vai resolver como se fosse de uma forma síncrona
// na verdade vai esperar cada fase terminar para a outra começar

// aguarde('fase 1', numAleatorio())
//   .then(valor => {
//     console.log(valor)
//     return aguarde('fase 2', numAleatorio())
//   })
//   .then(fase => {
//     console.log(fase)
//     return aguarde('fase 3', numAleatorio())
//   })
//   .then(fase => {
//     console.log(fase)
//     return fase
//   })
//   .then(fase => console.log('Terminamos na fase:', fase))
//   .catch(error => console.log(error))

// ### USANDO ASYNC/AWAIT COM O MESMO CÓDIGO ###

async function executa(){
  try {
    const fase1 =  aguarde('Fase 1', 1000) //sem o await, irá rodar em '1ms' ela ficará no estado <pending>
    console.log(fase1)

    //irá rodar após 1ms - mensagem irá aparecer no console... depois da mensagem de <pending>
    setTimeout(function(){
    console.log('Essa promise estava pending: ',fase1)
    }, 1100)
    
    const fase2 = await aguarde('Fase 2',numAleatorio()) //simule um erro substit. 'Fase 2' por nº
    console.log(fase2)
  
    const fase3 = await aguarde('Fase 3',numAleatorio())
    console.log(fase3)
  
    console.log('Terminamos na fase:', fase3)
  }catch(e){
    console.log(e)
  }
}
executa()

//add o try / catch para tratar erros

//async - permite o uso de await dentro de uma função
//pra uma promise ser finalizada

//Estados da promise
// 1 - pending (pendent): sendo executada e ainda n retornou o valor;
// 2 - fulfilled (realizada): houve sucesso na operação;
// 3 - rejected (rejeitado): falha na operação;
// 4 - settled (estabelecida): que foi realizada ou rejeitada;
