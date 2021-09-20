const path = require("path");
const express = require("express");

// Instanciando um novo aplicativo Express que será o nosso servidor web
const app = express();

// Escutando requisições HTTP do verbo GET na rota '/'
// A callback de todo route listener recebe 2 parâmetros obrigatórios: request e response. O object request contém informações sobre a requisição e o objeto response contém métodos para enviar a resposta
app.get("/", (request, response) => {
  console.log("Chegou um GET na rota /!");
  response.sendFile(path.resolve(__dirname, "../public/index.html")); // Respondendo a requisição com um arquivo HTML
});

// Respondendo a requisição com um arquivo JSON ao invés de um HTML
app.get("/hello-world", (req, res) => {
  res.json({ msg: "Hello world!" });
});

app.listen(4000, () => console.log("Servidor rodando na porta 4000!"));
