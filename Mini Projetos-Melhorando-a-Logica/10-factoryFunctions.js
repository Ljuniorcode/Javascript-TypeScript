//Factory Functions

const celular = {
  marcaCelular: 'Motorola',
  tamanhoTela: {
    vertical: 155,
    horizontal: 75
  },
  capacidadeBateria: 9000,
  ligar: function () {
    console.log('Fazendo ligação...')
  }
}

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}

const celular1 = criarCelular('Motorola', 6.9, 9000)
console.log(celular1)
