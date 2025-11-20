const express = require("express");
const app = express();

const empresaRoutes = require("./routes/empresaRoutes");
const planoRoutes = require("./routes/planoRoutes");
const pessoaFisicaRoutes = require("./routes/pessoaFisicaRoutes");

app.use(express.json());

// ROTAS
app.use("/empresas", empresaRoutes);
app.use("/planos", planoRoutes);
app.use("/pessoas-fisicas", pessoaFisicaRoutes);

// MIDDLEWARE GLOBAL DE ERRO (melhorado)
app.use((err, req, res, next) => {
  console.error("🔥 ERRO:", err);

  // erro de campo único (cpf, cnpj, etc.)
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({
      error: "Registro já existente (constraint UNIQUE)."
    });
  }

  // erro de chave estrangeira
  if (err.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).json({
      error: "Referência inválida (chave estrangeira incorreta)."
    });
  }

  // erro inesperado
  return res.status(500).json({
    error: "Erro interno do servidor. Tente novamente."
  });
});

module.exports = app;
