const readline = require('readline-sync');
const conta = require('./conta');
const listar = require('./listar');

while (true) {
    console.log(`
1 - Criar conta
2 - Depósito
3 - Saque
4 - Listar contas
5 - Listar movimentações
0 - Sair
    `);

    const opcao = readline.questionInt('Escolha: ');

    if (opcao === 0) break;

    switch (opcao) {
        case 1:
            const nome = readline.question('Nome: ');
            conta.criarConta(nome);
            break;

        case 2:
            conta.deposito(
                readline.questionInt('ID da conta: '),
                readline.questionFloat('Valor: ')
            );
            break;

        case 3:
            conta.saque(
                readline.questionInt('ID da conta: '),
                readline.questionFloat('Valor: ')
            );
            break;

        case 4:
            listar.listarContas();
            break;

        case 5:
            listar.listarMovimentacoes();
            break;
    }
}
