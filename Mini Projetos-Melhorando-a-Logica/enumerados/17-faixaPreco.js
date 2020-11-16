let faixas = [
  { tooltip: 'até R$700', min: 0, max: 700 },
  { tooltip: 'de R$700 até R$1000', min: 700, max: 1000 },
  { tooltip: 'R$1000 ou mais', min: 1000, max: 99999 },
]

//factory function

function criarFaixapreco(tooltip, min, max) {
  return {
    tooltip,
    min,
    max
  }
}

let faixas2 = [
  criarFaixapreco('a', 1, 100),
  criarFaixapreco('b', 100, 1000),
  criarFaixapreco('c', 1000, 10000)
]
console.log(faixas2)