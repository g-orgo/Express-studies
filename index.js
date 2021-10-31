var app = require("./config/server");
var port = 3000 || process.env.port;

app.listen(port, console.log(`Rodando na porta ${port}`)); // Isso estará ouvindo a porta que o servidor está aberto
