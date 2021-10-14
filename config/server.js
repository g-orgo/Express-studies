var app = require("express")(); // O express retorna uma função, portanto fazendo assim iremos encurtar o código
var port = 3000 || process.env.port;


app.set("view engine", "ejs"); // Especifíca o tipo de arquivo que será usado como template engine
app.set("views", "./app/views"); // Especifica onde as views estão


app.listen(port, console.log(`Rodando na porta ${port}`)); // Isso estará ouvindo a porta que o servidor está aberto

module.exports = app;