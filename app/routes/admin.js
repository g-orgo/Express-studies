module.exports = function (application) {
    application.get("/formulario_inclusao_noticia", (req, res) => {
        res.render("admin/form_add_article");
    });
    application.post("/noticia/salvar", (req, res) => {
        var article = req.body;

        var connection = application.config.dbConnection();
        var newsModel = new application.app.models.NewsDAO(connection);

        
            newsModel.saveArticle(article, function (err, result) {
                /* O legal de fazer como um módulo independente
                essa consulta no banco é que isso além de estar dentro
                da SRP é reaproveitável em outros pontos do código */
                res.redirect("../noticias"); // Passando as informações do banco para o front
            });
        // res.redirect("../noticias/noticia");
    });
};
