const db = require('./db');

function listarContas() {
    db.query('SELECT * FROM contas', (err, rows) => {
        console.table(rows);
    });
}

function listarMovimentacoes() {
    db.query('SELECT * FROM movimentacoes', (err, rows) => {
        console.table(rows);
    });
}

module.exports = { listarContas, listarMovimentacoes };
