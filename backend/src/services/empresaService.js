const { Empresa } = require("../../models");

async function listarEmpresas() {
  return Empresa.findAll({
    order: [["id_empresa", "ASC"]]
  });
}

async function buscarEmpresaPorId(id) {
  const empresa = await Empresa.findByPk(id);
  return empresa;
}

async function criarEmpresa(dados) {
  const {
    razao_social,
    nome_fantasia,
    cnpj,
    descricao_empresa,
    status_empresa,
    fk_plano_id_plano
  } = dados;

  // aqui poderia ter validação mais forte (Zod, etc.)
  const nova = await Empresa.create({
    razao_social,
    nome_fantasia,
    cnpj,
    descricao_empresa,
    status_empresa,
    fk_plano_id_plano
  });

  return nova;
}

async function atualizarEmpresa(id, dados) {
  const empresa = await Empresa.findByPk(id);
  if (!empresa) {
    return null;
  }

  await empresa.update({
    razao_social: dados.razao_social ?? empresa.razao_social,
    nome_fantasia: dados.nome_fantasia ?? empresa.nome_fantasia,
    cnpj: dados.cnpj ?? empresa.cnpj,
    descricao_empresa: dados.descricao_empresa ?? empresa.descricao_empresa,
    status_empresa:
      typeof dados.status_empresa === "boolean"
        ? dados.status_empresa
        : empresa.status_empresa,
    fk_plano_id_plano:
      dados.fk_plano_id_plano ?? empresa.fk_plano_id_plano,
    atualizacao_empresa: new Date()
  });

  return empresa;
}

async function removerEmpresa(id) {
  const empresa = await Empresa.findByPk(id);
  if (!empresa) {
    return null;
  }

  // se quiser soft delete controlado, poderia só setar desativacao_empresa
  await empresa.destroy(); // paranoid => marca deleted_at

  return true;
}

module.exports = {
  listarEmpresas,
  buscarEmpresaPorId,
  criarEmpresa,
  atualizarEmpresa,
  removerEmpresa
};
