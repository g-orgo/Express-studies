module.exports = function (app) {
    app.get("/noticias", (req, res) => {
        var mysql = require("mysql");

        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "portal_noticias",
        });
        connection.connect();

        connection.query(
            "SELECT * FROM noticias",
            function (err, result) {
                /* query() espera como parâmetros uma
                chamada em SQL para o banco e uma função
                callback contendo erro e resultado */
                if (err) throw err;
                res.render("noticias/noticias", {news: result}); // Passando as informações do banco para o front
            }
        );

    });
};
