//Velocidade máxima de até 70km
//A cada 5km acima do limite vc ganha 1 ponto na carteira
//Math.floor()
//Caso os pontos maior que 12 => 'Carteira suspensa'

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70
  const kmPorPonto = 5
  if (velocidade <= velocidadeMaxima)
    console.log('Ok, velocidade permitida')
  else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
    if (pontos >= 12)
      console.log('Carteira suspensa, acima de 12 pontos')
    else
      console.log('Pontos:', pontos)
  }
}