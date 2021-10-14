var app = require("./config/server");

var newsRoute = require("./app/routes/noticias")(app);
var homeRoute = require("./app/routes/home")(app);
var addNewsRoute = require("./app/routes/formulario_inclusao_noticia")(app);
