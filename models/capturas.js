const conexao = require('../infraestrutura/conexao')

class Captura {
    adiciona(captura){
        const sql = 'INSERT INTO capturados SET ?'

        conexao.query(sql, captura, (erro, resultados) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Captura