module.exports = function (application) {
    application.get("/", function (req, res) {
        // Método GET HTTP
        res.render("home/index"); // Este é o caminho até a view
    });
};
