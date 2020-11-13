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

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = () => console.log('Ligando...')
}

const cel1 = new Celular('Asus', 5.5, 8000)
console.log(cel1)