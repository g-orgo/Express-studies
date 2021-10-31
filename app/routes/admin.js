module.exports = function (application) {
    application.get("/formulario_inclusao_noticia", (req, res) => {
        res.render("admin/form_add_noticia");
    });
    application.post("/noticias/salvar", (req, res) => {
        var news = req.body;
        res.render(news);
    });
};
