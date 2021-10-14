module.exports = function (app) {
    app.get("/", (req, res) => {
        // Método GET HTTP
        res.render("home/index"); // Este é o caminho até a view
    });
};
