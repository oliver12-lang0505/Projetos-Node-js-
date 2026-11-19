// app.js

const readline = require("readline");
const { buscarNome } = require("./listar");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarCpf(cpf) {
  return cpf.length === 11 && /^\d+$/.test(cpf);
}

rl.question("Digite o CPF: ", (cpf) => {
  if (!validarCpf(cpf)) {
    console.log("❌ CPF inválido");
    rl.close();
    return;
  }

  const nome = buscarNome(cpf);

  if (nome) {
    console.log(`✅ Nome encontrado: ${nome}`);
  } else {
    console.log("❌ CPF não encontrado");
  }

  rl.close();
});
