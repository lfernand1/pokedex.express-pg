require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./src/routes/routes");

const app = express();
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
