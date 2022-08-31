const env = require("dotenv").config().parsed;
const express = require("express");
const app = express();

//Roteamento (Básico)
const handler = (req, res) => {
  // Query Params - Parâmetros de busca
  console.log(`QUERY PARAMNS`, req.query);

  // Path Paramsn - Parâmetros de rota ["/books:id"]
  console.log(`PATH PARAMS`, req.params);

  res.end(`RESPONSE ${req.method}!`);
};

// CREATE
app.post("/books", handler);

// READ
app.get("/books", handler);

// UPDATE
app.put("/books", (req, res) => {
  res.end("RESPONSE PUT!");
});

app.patch("/books", (req, res) => {
  res.end("RESPONSE PATCH!");
});

// DELETE
app.delete("/books", (req, res) => {
  res.end("RESPONSE DELETE!");
});

// Roteamento (Avançado)

const advancedHandler = (req, res) => {
  console.log(`ROUTE: ${req.method} ${req.url}`);
  res.end(`END: ${req.url}`);
};

// Opcional -> ? [Ele deixa o 1 caracter a esquerda opcional]
app.get("/pages?", advancedHandler);

// Repetidor -> + [Ele repeti o caracter a esquerda]
app.get("/sess+ion", advancedHandler);

// Tudo -> * [Qualquer coisa depois do asterístico ele vai aceitar]
app.get("/auth*", advancedHandler);

// Agrupador -> () []
// Ou -> |
app.get("/den(y|ied)", advancedHandler);
app.get("/front(-end)?", advancedHandler);

// Expressão Regular
app.get(/(server|cliente)\-side/, advancedHandler);

app.listen(env.PORT, () => {
  console.log(`Server running is ${env.PORT}`);
});
