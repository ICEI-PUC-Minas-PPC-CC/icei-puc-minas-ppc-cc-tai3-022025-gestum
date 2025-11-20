const { Contrato } = require("../../models");

async function listarContratos() {
  return Contrato.findAll({
    order: [["id_contrato", "ASC"]]
  });
}

async function buscarContratoPorId(id) {
  return Contrato.findByPk(id);
}

async function criarContrato(data) {
  return Contrato.create({
    titulo_contrato: data.titulo_contrato,
    numero_contrato: data.numero_contrato,
    data_inicio: data.data_inicio,
    data_fim: data.data_fim,
    status_contrato: data.status_contrato,
    descricacao_contrato: data.descricacao_contrato ?? null,
    ativacao_contrato: new Date()
  });
}

async function atualizarContrato(id, data) {
  const contrato = await Contrato.findByPk(id);
  if (!contrato) return null;

  await contrato.update({
    titulo_contrato: data.titulo_contrato ?? contrato.titulo_contrato,
    numero_contrato: data.numero_contrato ?? contrato.numero_contrato,
    data_inicio: data.data_inicio ?? contrato.data_inicio,
    data_fim: data.data_fim ?? contrato.data_fim,
    status_contrato:
      typeof data.status_contrato === "boolean"
        ? data.status_contrato
        : contrato.status_contrato,
    descricacao_contrato:
      data.descricacao_contrato ?? contrato.descricacao_contrato,
    atualizacao_contrato: new Date()
  });

  return contrato;
}

async function removerContrato(id) {
  const contrato = await Contrato.findByPk(id);
  if (!contrato) return null;

  await contrato.destroy();
  return true;
}

module.exports = {
  listarContratos,
  buscarContratoPorId,
  criarContrato,
  atualizarContrato,
  removerContrato
};
