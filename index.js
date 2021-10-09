var app = require('./config/server')

app.get("/", (req, res) => { // Método GET HTTP
    res.render("home/index"); // Este é o caminho até a view
});

app.get("/formulario_inclusao_noticia", (req, res) => {
    res.render("admin/form_add_noticia");
});

app.get("/noticias", (req, res) => {
    res.render("noticias/noticias");
});
