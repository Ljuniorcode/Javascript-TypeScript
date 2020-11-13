const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')

const tarefas = []

function mostraTarefas() {
  elementoLista.innerHTML = '' //limpa o html e coloca oq tem no array tarefas

  for (tarefa of tarefas) {
    const elementoTarefa = document.createElement('li')
    const textoTarefa = document.createTextNode(tarefa) //cada 'tarefa' será um item do array 'tarefas'

    //criando elementos com opção de exclusão
    const elementoLink = document.createElement('a')
    const pos = tarefas.indexOf(tarefa)

    const linkText = document.createTextNode(' Delete')//CRIA UM ELEMENTO DE TEXTO X
    elementoLink.appendChild(linkText) //aqui é uma função delete que tem como filho o elemento X

    //adicionando um atributo de click no elemento <a> que chama uma função de delete
    elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

    elementoTarefa.appendChild(textoTarefa) // <li> terá como flho um texto
    elementoLista.appendChild(elementoTarefa) // <ul> terá como filho uma <li> com texto
    elementoTarefa.appendChild(elementoLink) // dentro de <li> add um filho como link <a> 
  }
}

mostraTarefas()

function addTarefa() {
  const textoTarefa = elementoInput.value //pega o valor digitado no campo input
  tarefas.push(textoTarefa) //adiciona o valor digitado no array tarefas
  elementoInput.value = '' //apos adicionar tarefa, vamos limpar o input
  mostraTarefas()
}

function deletaTarefa(pos) {
  tarefas.splice(pos, 1)
  mostraTarefas()
}

elementoBotao.setAttribute('onclick', 'addTarefa()') //add um atributo de click no botão, qdo clicado chama a função addTarefa()