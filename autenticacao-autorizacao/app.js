// Imnportando e Criando o App
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// Variáveis de Ambiente
const { PORT, USER, PASS } = require("dotenv").config().parsed;
const getAuthorization = require("./middlewares/authorization");
const sanSenha = require("./middlewares/sanitizeSENHA");

// Ativando Middlewares - Nível Aplicação
app.use(express.json(), cookieParser());

/* Rotas de Aplicação */
// Autenticação

app.post("/login", sanSenha, (req, res) => {
  const { usr, pwd } = req.body;

  const cpf = usr.replace(/[\D+]/gi, "");
  const authentication = cpf === USER && pwd === PASS;

  console.log(USER, PASS);
  console.log(usr, pwd);

  if (authentication) {
    res.cookie("AUTH_APP", authentication).json({
      message: "Authenticated",
    });
  } else {
    res.status(404).json({
      message: "Not Authenticated",
    });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("AUTH_APP").status(404).json({
    message: "Not Authenticated",
  });
});

// Autorização
app.get("/protected", getAuthorization, (req, res) => {
  res.json({ route: req.path });
});

app.get("/privated", getAuthorization, (req, res) => {
  res.json({ route: req.path });
});

app.listen(PORT, console.log(`Server running ar port ${PORT}...`));
