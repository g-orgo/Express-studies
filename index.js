var app = require("express")(); // O express retorna uma função, portanto fazendo assim iremos encurtar o código

var port = 3000 || process.env.port

app.get('/', (req, res) =>{
    res.send("<html><body>Ay</body></html>")
})

app.listen(port, console.log(`Rodando na porta ${port}`))