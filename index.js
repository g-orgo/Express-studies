var app = require("express")(); // O express retorna uma função, portanto fazendo assim iremos encurtar o código

app.set("view engine", "ejs");

var port = 3000 || process.env.port;

app.get("/", (req, res) => {
    res.send("<html><body>Ay</body></html>");
});

app.get("/tecnologia", (req, res) => {
    res.render("secao/tecnologia"); // Este é o caminho até a view
});

app.listen(port, console.log(`Rodando na porta ${port}`));
