export const errorHandler = (err, req, res, next) => {
  console.error("🔥 ERRO CAPTURADO:", err);

  // 1) Erros de validação do Sequelize
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      error: "Erro de validação",
      messages: err.errors.map(e => e.message)
    });
  }

  // 2) Erros de unicidade (unique)
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({
      error: "Registro duplicado",
      messages: err.errors.map(e => e.message)
    });
  }

  // 3) Violação de chave estrangeira
  if (err.name === "SequelizeForeignKeyConstraintError") {
    return res.status(409).json({
      error: "Violação de integridade referencial",
      detail: `A entidade relacionada não existe ou foi removida.`,
      column: err.index
    });
  }

  // 4) Outros erros do Sequelize (gerais)
  if (err.name && err.name.startsWith("Sequelize")) {
    return res.status(400).json({
      error: "Erro de banco de dados",
      detail: err.message
    });
  }

  // 5) Erro inesperado (fallback)
  return res.status(500).json({
    error: "Erro interno do servidor",
    detail: err.message
  });
};
