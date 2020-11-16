//objeto endereço

//criar um objeto endereço que contem
//rua, cidade, cep, exibirendereço

let end = {
  rua: 'Rua dos estudantes',
  cidade: 'internet',
  cep: 7562033,
}

function carregarEndereco(end) {
  for (let chave in end) {
    console.log(chave, end[chave]) //end[chave] - exibe o valor da chave
  }
}
carregarEndereco(end)