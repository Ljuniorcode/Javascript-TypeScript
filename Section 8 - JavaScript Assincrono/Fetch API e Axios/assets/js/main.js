// fetch('pessoas.json') // é um array com vários objetos referentes a cada pessoa
//   .then(resp => resp.json()) //converte em um obj javascript
//   .then(json => carregaElementosNaPagina(json))


//usando axios
axios('pessoas.json')
  .then(res => carregaElementosNaPagina(res.data))
  


function carregaElementosNaPagina(json){
  const table = document.createElement('table') //cria uma tag de tabela no html

  // const nomes = document.querySelector('.nomes')
  // nomes.innerHTML = 'nomes'

  //essa parte ABAIXO foi pra práticar um pouco o DOM
  // let th = document.createElement('th')
  // th.innerText = 'nome'
  // table.appendChild(th)

  // let th1 = document.createElement('th')
  // th1.innerText = 'email'
  // table.appendChild(th1)

  // let th2 = document.createElement('th')
  // th2.innerText = 'empresa'
  // table.appendChild(th2)

  //essa parte ACIMA foi pra práticar um pouco o DOM

  //O CÓDIGO DO EXERCÍCIO COMEÇA AQUI

  for(let pessoa of json){ //percorre todos os valores do arquivo json
    console.log(pessoa) //exibe tudo no console
    const tr = document.createElement('tr') //cria uma tag 'tr' e add a variavel tr

    let td1 = document.createElement('td') //cria uma tag 'td' e add a variavel td1
    td1.innerHTML = pessoa.nome //tag td1 irá receber uma string da prop. que está dentro do arq. json
    tr.appendChild(td1) //a tag 'tr' é uma linha e terá como filho uma tag de célula de dados

    let td2 = document.createElement('td')
    td2.innerHTML = pessoa.email
    tr.appendChild(td2)

    let td3 = document.createElement('td')
    td3.innerHTML = pessoa.empresa
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)

}

//th - em html criamos a célula de cabeçalho
//tr - em html criamos as linhas
//td - em html criamos as células de dados
