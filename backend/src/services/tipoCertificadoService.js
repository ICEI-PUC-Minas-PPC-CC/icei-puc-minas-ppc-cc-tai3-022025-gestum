const { TipoCertificado } = require("../../models");

async function listarTipos() {
  return TipoCertificado.findAll({
    order: [["id_tipo_certificado", "ASC"]]
  });
}

async function buscarTipoPorId(id) {
  return TipoCertificado.findByPk(id);
}

async function criarTipo(data) {
  return TipoCertificado.create({
    nome_tipo_certificado: data.nome_tipo_certificado,
    descricao_tipo_certificado: data.descricao_tipo_certificado
  });
}

async function atualizarTipo(id, data) {
  const tipo = await TipoCertificado.findByPk(id);
  if (!tipo) return null;

  await tipo.update({
    nome_tipo_certificado: data.nome_tipo_certificado ?? tipo.nome_tipo_certificado,
    descricao_tipo_certificado:
      data.descricao_tipo_certificado ?? tipo.descricao_tipo_certificado
  });

  return tipo;
}

async function removerTipo(id) {
  const tipo = await TipoCertificado.findByPk(id);
  if (!tipo) return null;

  await tipo.destroy();
  return true;
}

module.exports = {
  listarTipos,
  buscarTipoPorId,
  criarTipo,
  atualizarTipo,
  removerTipo
};
