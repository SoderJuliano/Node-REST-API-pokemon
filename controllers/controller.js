const Captura = require('../models/capturas')

module.exports = app => {
    app.get('/', (req, res) => res.send("server rodando"))

    app.post('/capturado', (req, res) => {
        const captura = req.body

        console.log(req.body)
        
        Captura.adiciona(captura)
        res.send(req.body)
    })    
}