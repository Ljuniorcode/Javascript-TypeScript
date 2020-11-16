//criar função somar que retorn a
//soma de todos os múltiplos de 3 e 5

//múltiplos de 3
//3, 6, 9

//múltiplos de 5
//5, 10

// - Somandos os múltiplos
//armazenar os múltiplos de 3
//armazenar os múltiplos de 5
//somar os dois


somar(10)
function somar(num) {
  let multiplosDeTres = 0
  let multiplosDeCinco = 0

  for (i = 0; i <= num; i++) {
    if (i % 3 === 0)
      multiplosDeTres += i
    if (i % 5 === 0) {
      multiplosDeCinco += i
    }
  }
  return console.log(multiplosDeCinco + multiplosDeTres)
}