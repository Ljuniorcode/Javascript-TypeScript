//função que gera um nº aleatório
function numAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function aguarde(msg, tmp) {
  //usando promise, chamando um construtor
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject('Vixxx deu ruim - wtf')
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' passei na promise'); //resolvendo o cód.
      return;
    }, tmp);
  });
}

//Tipos
//Promise.all Promise.race Promise.resolve Promise.reject
//os valores abaixo irão retornar na ordem 0, 1, 2, 3 e 4 do array
const promises = [
  //"Aprendendo sobre promise",
  aguarde("Promise 1", numAleatorio(1,4)),
  //aguarde("Promise 2", numAleatorio(1,4)),
  //aguarde(1212, 1000), //rejeita todas as outras promises e cai no erro - Promise.all
  //"Resultado de uma operação assíncrona",
  aguarde("Promise 2", numAleatorio(1,4)),

];

//Promise.all - Resolvendo tudo
// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

//Promise.race - A primeira que resolver entrega o valor 
//Sempre irá entregar o primeiro valor - no caso: 'Aprendendo sobre promise'
// Promise.race(promises)
//   .then((valor) => {
//     console.log(valor);0
//   })
//   .catch((error) => {
//     console.log(error);
//   });


//Promise.resolve - entrega uma promise resolvida
// function downloadPageWeb(){
//   const emCAche = false;

//   if(emCAche){
//     return Promise.resolve('Página em cache')
//   } else {
//     return aguarde("Download feito - ahnn", numAleatorio(1,4))
//   }
// }

// downloadPageWeb()
//   .then(dadosPagina => {
//     console.log(dadosPagina)
//   })
//   .catch(e => console.log(e))
//Retorna 'página em cache' pq a const emCache é  true


//Promise.reject - 
function downloadPageWeb(){
  const emCAche = true;

  if(emCAche){
    return Promise.reject('Página em cache') //irá cair no catch()
  } else {
    return aguarde("Download feito - ahnn", numAleatorio(1,4))
  }
}

downloadPageWeb()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log('Error: ',e))
//Retorna 'Error: página em cache' usamos reject que cai direto no catch()
