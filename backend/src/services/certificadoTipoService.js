const { CertificadoTipoCertificado } = require("../../models");

async function listar() {
  return CertificadoTipoCertificado.findAll({
    order: [["id_certificado_tipocertificado", "ASC"]]
  });
}

async function buscarPorId(id) {
  return CertificadoTipoCertificado.findByPk(id);
}

async function criar(data) {
  return CertificadoTipoCertificado.create({
    fk_tipo_certificado_id_tipo_certificado: data.fk_tipo_certificado_id_tipo_certificado,
    fk_certificado_id_certificado: data.fk_certificado_id_certificado
  });
}

async function atualizar(id, data) {
  const item = await CertificadoTipoCertificado.findByPk(id);
  if (!item) return null;

  await item.update({
    fk_tipo_certificado_id_tipo_certificado:
      data.fk_tipo_certificado_id_tipo_certificado ??
      item.fk_tipo_certificado_id_tipo_certificado,

    fk_certificado_id_certificado:
      data.fk_certificado_id_certificado ??
      item.fk_certificado_id_certificado
  });

  return item;
}

async function remover(id) {
  const item = await CertificadoTipoCertificado.findByPk(id);
  if (!item) return null;

  await item.destroy();
  return true;
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
};
