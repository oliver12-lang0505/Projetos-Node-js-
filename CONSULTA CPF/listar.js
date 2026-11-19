// listar.js

const pessoas = {
  "12345678909": "João Silva",
  
};

function buscarNome(cpf) {
  return pessoas[cpf] || null;
}

module.exports = { buscarNome };

