// var dbConnection = require("../../config/dbConnection");
module.exports = function (application) {
    application.get("/noticia", (req, res) => {
        res.redirect('/noticias')
    });
    application.get("/noticias/noticia", function (req, res) {
        /* Diferente da maioria dos módulos que criei este (dbConnection) irá 
        ser chamado apenas quando necessário */
        var connection = application.config.dbConnection();
        var newsModel = new application.app.models.NewsDAO(connection);

        newsModel.getArticle(function (err, result) {
            /* query() espera como parâmetros uma
                chamada em SQL para o banco e uma função
                callback contendo erro e resultado */
            res.render("news/article", { article: result }); // Passando as informações do banco para o front
        });
    });
};
