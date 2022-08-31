const express = require("express");
const app = express();
const path = require("path");

// Importação Dotenv
const env = require("dotenv").config().parsed;

// Configurando app
app.set("view engine", "ejs"); //Aqui estou setando o tipo de views
app.set("views", "views");
app.use(express.static("public"));

// Routes
const upload = require("../routes/upload");
app.use("/upload", upload);

// Inicializar aplicação
app.listen(env.PORT, console.log(`Server running at PORT ${env.PORT}`));
