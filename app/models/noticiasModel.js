module.exports = function (){
    this.getNoticias = function (connection, callback){
        /* query() espera como parâmetros uma
        chamada em SQL para o banco e uma função
        callback contendo erro e resultado */
        connection.query("SELECT * FROM noticias", callback);

    };
    this.getNoticia = function (connection, callback){
        /* query() espera como parâmetros uma
        chamada em SQL para o banco e uma função
        callback contendo erro e resultado */
        connection.query("SELECT * FROM noticias WHERE id_noticia = 1", callback);

    };
    return this;
}