const express = require("express");
const app = express();
const empresaRoutes = require("./routes/empresaRoutes");
const planoRoutes = require("./routes/planoRoutes");

app.use(express.json());

// rotas
app.use("/empresas", empresaRoutes);
app.use("plano", planoRoutes);

// middleware simples de erro
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({ message: "Erro interno do servidor" });
});

module.exports = app;
