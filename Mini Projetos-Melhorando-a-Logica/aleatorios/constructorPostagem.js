function Postagem(titulo, mensagem, autor, visualizacao, comentarios, estaAoVivo) {
  this.titulo = titulo
  this.mensagem = mensagem
  this.autor = autor
  this.visualizacao = visualizacao
  this.comentarios = comentarios
  this.estaAoVivo = estaAoVivo
}


let postagem = new Postagem('a', 'b', 'c')
console.log(postagem)