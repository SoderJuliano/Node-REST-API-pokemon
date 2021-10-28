const mysql = require('mysql')

const conexao = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'soder1989',
        database: 'pokemon'
    }
)

module.exports = conexao