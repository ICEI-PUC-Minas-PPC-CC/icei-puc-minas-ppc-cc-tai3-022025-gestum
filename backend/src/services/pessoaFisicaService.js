const { PessoaFisica } = require("../../models");

async function listarPessoasFisicas() {
  return PessoaFisica.findAll({
    order: [["id_pessoa_fisica", "ASC"]]
  });
}

async function buscarPessoaFisicaPorId(id) {
  return PessoaFisica.findByPk(id);
}

async function criarPessoaFisica(data) {
  // simples por enquanto, sem validação extra
  const pessoa = await PessoaFisica.create({
    nome_pessoa_fisica: data.nome_pessoa_fisica,
    cpf: data.cpf,
    status_pessoa_fisica: data.status_pessoa_fisica,
    descricao_pessoa_fisica: data.descricao_pessoa_fisica ?? null,
    fk_empresa_id_empresa: data.fk_empresa_id_empresa,
    ativacao_pessoa_fisica: new Date()
  });

  return pessoa;
}

async function atualizarPessoaFisica(id, data) {
  const pessoa = await PessoaFisica.findByPk(id);
  if (!pessoa) return null;

  await pessoa.update({
    nome_pessoa_fisica: data.nome_pessoa_fisica ?? pessoa.nome_pessoa_fisica,
    cpf: data.cpf ?? pessoa.cpf,
    status_pessoa_fisica:
      typeof data.status_pessoa_fisica === "boolean"
        ? data.status_pessoa_fisica
        : pessoa.status_pessoa_fisica,
    descricao_pessoa_fisica:
      data.descricao_pessoa_fisica ?? pessoa.descricao_pessoa_fisica,
    fk_empresa_id_empresa:
      data.fk_empresa_id_empresa ?? pessoa.fk_empresa_id_empresa,
    atualizacao_pessoa_fisica: new Date()
  });

  return pessoa;
}

async function removerPessoaFisica(id) {
  const pessoa = await PessoaFisica.findByPk(id);
  if (!pessoa) return null;

  await pessoa.destroy(); // paranoid: marca deleted_at
  return true;
}

module.exports = {
  listarPessoasFisicas,
  buscarPessoaFisicaPorId,
  criarPessoaFisica,
  atualizarPessoaFisica,
  removerPessoaFisica
};
