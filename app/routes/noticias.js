module.exports = function (application) {
    application.get("/noticias", (req, res) => {
        /* Diferente da maioria dos módulos que criei este (dbConnection) irá 
        ser chamado apenas quando necessário */
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (err, result) {
            /* O legal de fazer como um módulo independente
            essa consulta no banco é que isso além de estar dentro
            da SRP é reaproveitável em outros pontos do código */
            res.render("noticias/noticias", { news: result }); // Passando as informações do banco para o front
        });
    });
};
