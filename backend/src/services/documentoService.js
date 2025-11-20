const { Documento } = require("../../models");

async function listar() {
  return Documento.findAll({
    order: [["id_documento", "ASC"]]
  });
}

async function buscarPorId(id) {
  return Documento.findByPk(id);
}

async function criar(data) {
  return Documento.create({
    nome_documento: data.nome_documento,
    caminho_url: data.caminho_url,
    tipo_mime: data.tipo_mime,
    tamanho_bytes: data.tamanho_bytes,
    hash_documento: data.hash_documento,
    descricao_documento: data.descricao_documento,
    fk_contrato_id_contrato: data.fk_contrato_id_contrato,
    fk_certificado_id_certificado: data.fk_certificado_id_certificado
  });
}

async function atualizar(id, data) {
  const doc = await Documento.findByPk(id);
  if (!doc) return null;

  await doc.update({
    nome_documento: data.nome_documento ?? doc.nome_documento,
    caminho_url: data.caminho_url ?? doc.caminho_url,
    tipo_mime: data.tipo_mime ?? doc.tipo_mime,
    tamanho_bytes: data.tamanho_bytes ?? doc.tamanho_bytes,
    hash_documento: data.hash_documento ?? doc.hash_documento,
    descricao_documento: data.descricao_documento ?? doc.descricao_documento,
    fk_contrato_id_contrato:
      data.fk_contrato_id_contrato ?? doc.fk_contrato_id_contrato,
    fk_certificado_id_certificado:
      data.fk_certificado_id_certificado ?? doc.fk_certificado_id_certificado
  });

  return doc;
}

async function remover(id) {
  const doc = await Documento.findByPk(id);
  if (!doc) return null;

  await doc.destroy();
  return true;
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
};
