const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // XAMPP geralmente é vazio
    database: 'banco_terminal',
    port: 3306 // se não funcionar, tente 3307
});

connection.connect(err => {
    if (err) {
        console.error('❌ Erro ao conectar:', err.message);
        return;
    }
    console.log('✅ Conectado ao MySQL');
});

module.exports = connection;

