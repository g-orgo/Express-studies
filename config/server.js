var app = require("express")(); // O express retorna uma função, portanto fazendo assim iremos encurtar o código
const bodyParser = require("body-parser");
var consign = require("consign");

app.set("view engine", "ejs"); // Especifíca o tipo de arquivo que será usado como template engine
app.set("views", "./app/views"); // Especifica onde as views estão

app.use(bodyParser.urlenconded({ extend: true })); // Usa a lib "bodyParser" como middleware para ter acesso ao body dos requests

consign()
    .include("app/routes")
    .then("config/dbConnection.js")
    .then("app/models")
    .into(app);
/* Essa linha está pegando todas as rotas, semelhante ao
comando:

var newsRoute = require("./app/routes/noticias")(app);

Mas referente à todas as rotas em "routes"
*/
module.exports = app;
