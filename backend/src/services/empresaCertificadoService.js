const { EmpresaCertificado } = require("../../models");

async function listar() {
  return EmpresaCertificado.findAll({
    order: [["id_empresa_certificado", "ASC"]]
  });
}

async function buscarPorId(id) {
  return EmpresaCertificado.findByPk(id);
}

async function criar(data) {
  return EmpresaCertificado.create({
    fk_empresa_id_empresa: data.fk_empresa_id_empresa,
    fk_certificado_id_certificado: data.fk_certificado_id_certificado
  });
}

async function atualizar(id, data) {
  const item = await EmpresaCertificado.findByPk(id);
  if (!item) return null;

  await item.update({
    fk_empresa_id_empresa:
      data.fk_empresa_id_empresa ?? item.fk_empresa_id_empresa,

    fk_certificado_id_certificado:
      data.fk_certificado_id_certificado ?? item.fk_certificado_id_certificado
  });

  return item;
}

async function remover(id) {
  const item = await EmpresaCertificado.findByPk(id);
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
