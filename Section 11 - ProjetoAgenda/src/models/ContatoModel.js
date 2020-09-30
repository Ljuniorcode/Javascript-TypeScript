const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.buscaPorId = async function (id) {
  if (typeof id !== 'string') return;
  const user = await ContatoModel.findById(id)
  return user
}

Contato.prototype.register = async function () {
  this.valida()

  if (this.errors.length > 0) return

  this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.valida = () => {
  //validação
  //email tem q ser válido, senha entre 3 e 50 caracteres
  this.cleanUp()
  if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email inválido')
  if (!this.body.nome) this.errors.push('Nome é um campo obrigatório')
  if (!this.body.email && !this.body.telefone) {
    this.errors.push('Pelo menos um contato precisa ser envaido: email ou telefone')

  }
}

Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    email: this.body.email,
    telefone: this.body.telefone,

  }
}

module.exports = Contato;