var mysql = require("mysql");
var connMySQL = function () {
    /* somente é feito uma real conexão com o banco quando
    esta função é chamada */
    console.log('Conexão com o banco estabelecida')
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portal_noticias",
    });
};
module.exports = function () {
    /* Módulo de conexão com o bd
    foi carregado sem ficar spammando
    de forma desnecessária a conexão em si */
    return connMySQL;
};
