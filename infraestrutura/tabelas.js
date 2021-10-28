class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTabelaCapturas()
    }

    criarTabelaCapturas() {
        const sql = 'CREATE TABLE IF NOT EXISTS Capturados '
            +'(id int not null AUTO_INCREMENT,' 
            +'nome varchar(50) not null,' 
            +'pokemon_id int not null,data_captura varchar(50),'
            +' PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log("tabela Capturas criada com sucesso")
            }
        })
    }
}

module.exports = new Tabelas