//natureza dinâmica de objetos

const mouse = {
  cor: 'red',
  marca: 'dazz'
}
mouse.velocidade = 5000
mouse.trocarDPI = () => {
  console.log('mudando velocidade')
}
console.log(mouse)

//delete mouse.velocidade - apagando 