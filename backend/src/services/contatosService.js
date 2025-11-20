const { Contatos } = require("../../models");

async function listarContatos() {
  return Contatos.findAll({
    order: [["id_contatos", "ASC"]]
  });
}

async function buscarContatoPorId(id) {
  return Contatos.findByPk(id);
}

async function criarContato(data) {
  return Contatos.create({
    campo_contato: data.campo_contato,
    tipo_contato: data.tipo_contato,
    descricao_contato: data.descricao_contato,
    status_contato: data.status_contato,
    fk_empresa_id_empresa: data.fk_empresa_id_empresa ?? null,
    fk_pessoa_fisica_id_pessoa_fisica: data.fk_pessoa_fisica_id_pessoa_fisica ?? null,
    ativacao_contatos: new Date()
  });
}

async function atualizarContato(id, data) {
  const contato = await Contatos.findByPk(id);
  if (!contato) return null;

  await contato.update({
    campo_contato: data.campo_contato ?? contato.campo_contato,
    tipo_contato: data.tipo_contato ?? contato.tipo_contato,
    descricao_contato: data.descricao_contato ?? contato.descricao_contato,
    status_contato:
      typeof data.status_contato === "boolean"
        ? data.status_contato
        : contato.status_contato,
    fk_empresa_id_empresa:
      data.fk_empresa_id_empresa ?? contato.fk_empresa_id_empresa,
    fk_pessoa_fisica_id_pessoa_fisica:
      data.fk_pessoa_fisica_id_pessoa_fisica ??
      contato.fk_pessoa_fisica_id_pessoa_fisica,
    atualizacao_contatos: new Date()
  });

  return contato;
}

async function removerContato(id) {
  const contato = await Contatos.findByPk(id);
  if (!contato) return null;

  await contato.destroy();
  return true;
}

module.exports = {
  listarContatos,
  buscarContatoPorId,
  criarContato,
  atualizarContato,
  removerContato
};
