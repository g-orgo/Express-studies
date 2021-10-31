// var dbConnection = require("../../config/dbConnection");
module.exports = function (application) {
    application.get("/noticias/noticia", function (req, res) {
        /* Diferente da maioria dos módulos que criei este (dbConnection) irá 
        ser chamado apenas quando necessário */
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (err, result) => {
            /* query() espera como parâmetros uma
                chamada em SQL para o banco e uma função
                callback contendo erro e resultado */
            if (err) throw err;
            res.render("noticias/noticia", { article: result }); // Passando as informações do banco para o front
        });
    });
};
