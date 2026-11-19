const db = require('./db');

function criarConta(nome) {
    db.query(
        'INSERT INTO contas (nome) VALUES (?)',
        [nome],
        () => console.log('Conta criada!')
    );
}

function deposito(id, valor) {
    db.query(
        'UPDATE contas SET saldo = saldo + ? WHERE id = ?',
        [valor, id]
    );

    db.query(
        'INSERT INTO movimentacoes (conta_id, tipo, valor) VALUES (?, "deposito", ?)',
        [id, valor]
    );
}

function saque(id, valor) {
    db.query(
        'UPDATE contas SET saldo = saldo - ? WHERE id = ?',
        [valor, id]
    );

    db.query(
        'INSERT INTO movimentacoes (conta_id, tipo, valor) VALUES (?, "saque", ?)',
        [id, valor]
    );
}

module.exports = { criarConta, deposito, saque };
