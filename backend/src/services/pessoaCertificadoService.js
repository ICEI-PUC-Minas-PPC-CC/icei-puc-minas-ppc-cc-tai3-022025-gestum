const { PessoaCertificado } = require("../../models");

async function listar() {
  return PessoaCertificado.findAll({
    order: [["id_pessoa_certificado", "ASC"]]
  });
}

async function buscarPorId(id) {
  return PessoaCertificado.findByPk(id);
}

async function criar(data) {
  return PessoaCertificado.create({
    fk_certificado_id_certificado: data.fk_certificado_id_certificado,
    fk_pessoa_fisica_id_pessoa_fisica: data.fk_pessoa_fisica_id_pessoa_fisica
  });
}

async function atualizar(id, data) {
  const item = await PessoaCertificado.findByPk(id);
  if (!item) return null;

  await item.update({
    fk_certificado_id_certificado:
      data.fk_certificado_id_certificado ??
      item.fk_certificado_id_certificado,

    fk_pessoa_fisica_id_pessoa_fisica:
      data.fk_pessoa_fisica_id_pessoa_fisica ??
      item.fk_pessoa_fisica_id_pessoa_fisica
  });

  return item;
}

async function remover(id) {
  const item = await PessoaCertificado.findByPk(id);
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
