const { Certificado } = require("../../models");

async function listarCertificados() {
  return Certificado.findAll({
    order: [["id_certificado", "ASC"]]
  });
}

async function buscarCertificadoPorId(id) {
  return Certificado.findByPk(id);
}

async function criarCertificado(data) {
  return Certificado.create({
    nome_certificado: data.nome_certificado,
    data_emissao: data.data_emissao,
    data_validade: data.data_validade,
    status_certificado: data.status_certificado,
    ativacao_certificado: new Date()
  });
}

async function atualizarCertificado(id, data) {
  const item = await Certificado.findByPk(id);
  if (!item) return null;

  await item.update({
    nome_certificado: data.nome_certificado ?? item.nome_certificado,
    data_emissao: data.data_emissao ?? item.data_emissao,
    data_validade: data.data_validade ?? item.data_validade,
    status_certificado:
      typeof data.status_certificado === "boolean"
        ? data.status_certificado
        : item.status_certificado,
    descricacao_certificado:
      data.descricacao_certificado ?? item.descricacao_certificado,
    atualizacao_certificado: new Date()
  });

  return item;
}

async function removerCertificado(id) {
  const item = await Certificado.findByPk(id);
  if (!item) return null;

  await item.destroy();
  return true;
}

module.exports = {
  listarCertificados,
  buscarCertificadoPorId,
  criarCertificado,
  atualizarCertificado,
  removerCertificado
};
