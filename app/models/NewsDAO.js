function NewsDAO(connection) {
    // O underline indica que esta propriedade é interna da classe
    this._connection = connection;
}
/* Assim como fazendo uso do this
usar prototype em funções cria um comportamento
semelhante à uma classe */

NewsDAO.prototype.getNews = function (callback) {
    /* query() espera como parâmetros uma
    chamada em SQL para o banco e uma função
    callback contendo erro e resultado */
    this._connection.query("SELECT * FROM noticias", callback);
};

NewsDAO.prototype.getArticle = function (callback) {
    this._connection.query(
        "SELECT * FROM noticias WHERE id_noticia = 1",
        callback
    );
};

NewsDAO.prototype.saveArticle = function (article, callback) {
    this._connection.query("INSERT INTO noticias SET ?", article, callback); // O MySQL aceita, através do método SET, um JSON
};

module.exports = function(){
    return NewsDAO
}
