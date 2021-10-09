var app = require("express")(); // O express retorna uma função, portanto fazendo assim iremos encurtar o código

app.set("view engine", "ejs"); // Especifíca o tipo de arquivo que será usado como template engine

var port = 3000 || process.env.port;

app.get("/", (req, res) => {
    res.render("home/index"); // Este é o caminho até a view
});

app.get("/formulario_inclusao_noticia", (req, res) => {
    res.render("admin/form_add_noticia");
});

app.get("/noticias", (req, res) => {
    res.render("noticias/noticias");
});

app.listen(port, console.log(`Rodando na porta ${port}`));
