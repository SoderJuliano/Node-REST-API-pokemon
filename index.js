const custumExpress = require('./config/custumExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas =  require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log("mysql rodando")
        Tabelas.init(conexao)
    }
})

const app = custumExpress()

app.listen(3000, () => console.log("rodando na porta 3000"))
