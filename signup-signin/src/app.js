// Importanto Modulos
const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

// Routes

//Inicializando a Aplicação
app.listen(PORT, console.log(`Server running at PORT ${PORT}...`));
