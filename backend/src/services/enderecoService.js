const { Endereco } = require("../../models");

async function listarEnderecos() {
  return Endereco.findAll({
    order: [["id_endereco", "ASC"]]
  });
}

async function buscarEnderecoPorId(id) {
  return Endereco.findByPk(id);
}

async function criarEndereco(data) {
  return Endereco.create({
    logradouro: data.logradouro,
    numero: data.numero,
    bairro: data.bairro,
    cidade: data.cidade,
    estado: data.estado,
    cep: data.cep,
    complemento: data.complemento ?? null,
    status_endereco: data.status_endereco,
    fk_empresa_id_empresa: data.fk_empresa_id_empresa ?? null,
    fk_pessoa_fisica_id_pessoa_fisica: data.fk_pessoa_fisica_id_pessoa_fisica ?? null,
    ativacao_endereco: new Date()
  });
}

async function atualizarEndereco(id, data) {
  const endereco = await Endereco.findByPk(id);
  if (!endereco) return null;

  await endereco.update({
    logradouro: data.logradouro ?? endereco.logradouro,
    numero: data.numero ?? endereco.numero,
    bairro: data.bairro ?? endereco.bairro,
    cidade: data.cidade ?? endereco.cidade,
    estado: data.estado ?? endereco.estado,
    cep: data.cep ?? endereco.cep,
    complemento: data.complemento ?? endereco.complemento,
    status_endereco:
      typeof data.status_endereco === "boolean"
        ? data.status_endereco
        : endereco.status_endereco,
    fk_empresa_id_empresa:
      data.fk_empresa_id_empresa ?? endereco.fk_empresa_id_empresa,
    fk_pessoa_fisica_id_pessoa_fisica:
      data.fk_pessoa_fisica_id_pessoa_fisica ??
      endereco.fk_pessoa_fisica_id_pessoa_fisica,
    atualizacao_endereco: new Date()
  });

  return endereco;
}

async function removerEndereco(id) {
  const endereco = await Endereco.findByPk(id);
  if (!endereco) return null;

  await endereco.destroy();
  return true;
}

module.exports = {
  listarEnderecos,
  buscarEnderecoPorId,
  criarEndereco,
  atualizarEndereco,
  removerEndereco
};
