const { Funcionario } = require("../../models");

async function listarFuncionarios() {
  return Funcionario.findAll({
    order: [["id_funcionario", "ASC"]]
  });
}

async function buscarFuncionarioPorId(id) {
  return Funcionario.findByPk(id);
}

async function criarFuncionario(data) {
  return Funcionario.create({
    nome_funcionario: data.nome_funcionario,
    contato_funcionario: data.contato_funcionario,
    email_funcionario: data.email_funcionario,
    descricao_funcionario: data.descricao_funcionario ?? null,
    status_funcionario: data.status_funcionario,
    fk_empresa_id_empresa: data.fk_empresa_id_empresa,
    ativacao_funcionario: new Date()
  });
}

async function atualizarFuncionario(id, data) {
  const funcionario = await Funcionario.findByPk(id);
  if (!funcionario) return null;

  await funcionario.update({
    nome_funcionario: data.nome_funcionario ?? funcionario.nome_funcionario,
    contato_funcionario: data.contato_funcionario ?? funcionario.contato_funcionario,
    email_funcionario: data.email_funcionario ?? funcionario.email_funcionario,
    descricao_funcionario:
      data.descricao_funcionario ?? funcionario.descricao_funcionario,
    status_funcionario:
      typeof data.status_funcionario === "boolean"
        ? data.status_funcionario
        : funcionario.status_funcionario,
    fk_empresa_id_empresa:
      data.fk_empresa_id_empresa ?? funcionario.fk_empresa_id_empresa,
    atualizacao_funcionario: new Date()
  });

  return funcionario;
}

async function removerFuncionario(id) {
  const funcionario = await Funcionario.findByPk(id);
  if (!funcionario) return null;

  await funcionario.destroy();
  return true;
}

module.exports = {
  listarFuncionarios,
  buscarFuncionarioPorId,
  criarFuncionario,
  atualizarFuncionario,
  removerFuncionario
};
