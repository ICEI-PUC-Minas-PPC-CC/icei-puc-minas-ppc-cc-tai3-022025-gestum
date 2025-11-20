const { Plano } = require("../../models");

async function listarPlanos() {
  return Plano.findAll({
    order: [["id_plano", "ASC"]]
  });
}

async function buscarPlanoPorId(id) {
  return Plano.findByPk(id);
}

async function criarPlano(data) {
  return Plano.create(data);
}

async function atualizarPlano(id, data) {
  const plano = await Plano.findByPk(id);
  if (!plano) return null;

  return plano.update(data);
}

async function removerPlano(id) {
  const plano = await Plano.findByPk(id);
  if (!plano) return null;

  await plano.destroy(); // paranoid
  return true;
}

module.exports = {
  listarPlanos,
  buscarPlanoPorId,
  criarPlano,
  atualizarPlano,
  removerPlano
};
