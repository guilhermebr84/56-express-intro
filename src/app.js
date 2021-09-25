// 01 - express é uma biblioteca, diponível no npm - expressjs. Tem um exemplo já no inicio, que já sobe um servidor web.
// 02 - precisa instalar como nossa dependencia - npm install express
// 03 - nesse momento, ESQUECER REACT - é tudo para o servidor, informação e lógica
// backend, é outra ponta do aplicativo, são requisições para o servidor.
// 04 - recebemos 02 arquivos vazios no começo: index.js e package.json. Por convenção da comunidade dev, aplicativo principal no EXPRESS, tem nome de app.js. Então renomeamos index.js para app.js.
// 05 - precisa atualizar a entrada "main" no arquivo package.json
// 06 - instalar o express - npm install express
// 07 - automaticamente cria a pasta "node modules" e "package-lock.json".
// 08 - não é para subir para o github a pasta "node modules", cria-se um arquivo chamado .gitignore. Os comandos de .gitignore estão na internet, pesquisar ".gitignore express". Achar o codigo, copiar e colar no codigo do arquivo.

const path = require("path"); // 17 - pacote path faz parte do proprio NODE, é só importar

// 09 - no NODE não usa a sintaxe "import" e sim com "const".
const express = require("express");

// 10 - Instanciando um novo aplicativo Express que será o nosso servidor web. A convenção da comunidade é chamar a const de app.
const app = express();
// 11 - servidor web é um programa que esta sendo executado, "sempre ligado", escutando requisições http, nas rotas que determinamos.

// 12 - Escutando requisições HTTP do verbo GET na rota '/'. a sintaxe ".get", só vai escutar requisições com verbo GET. A callback vai ser chamada assim que chegar a requisição na rota "/".
// 13 - A callback de todo route listener recebe 2 parâmetros/objetos obrigatórios: request e response. O object request contém informações sobre a requisição e o objeto response contém métodos para enviar a resposta.

app.get("/", (request, response) => {
  console.log("Chegou um GET na rota /!");
  // 14.01 - subir/inicializar o servidor com método ".listen" - no final do código.
  // 15.01 - para responder o GET:
  response.sendFile(path.resolve(__dirname, "../public/index.html")); // 16.02 - Respondendo a requisição com um arquivo HTML
  //15.02 - toda vez que altera o codigo é necessário reiniciar o servidor ou instalr o NODEMON
  //17 - utiliza o path. e o __ dirname puxa o caminho absoluto até o arquivo executado pelo NODE.
});

// 16.01 - depois de instalar o nodemon, lá no "scripts" do arquivo "package.json", acrescentar o "dev" = "nodemon ."

// 18 - Respondendo a requisição com um arquivo JSON ao invés de um HTML
app.get("/hello-world", (req, res) => {
  res.json({ msg: "Hello world!" });
});
// 14.02 - ".listen" Recebe 02 argumentos: 1o argumento é a porta (que a convenção sugere 4000), e o 2o é uma função callback que vai ser chamada quando terminar de servir o servidor.
// 14.02... - é opcional a callback, mas é interessante colocar para saber se tem retorno.
app.listen(4000, () => console.log("Servidor rodando na porta 4000!"));

// 15 - rodar o arquivo node - node src/app.js
