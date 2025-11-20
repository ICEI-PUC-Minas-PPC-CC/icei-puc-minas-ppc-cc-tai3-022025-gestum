"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("funcionario", [
      {
        nome_funcionario: "Ana Ribeiro",
        contato_funcionario: "35999998888",
        email_funcionario: "ana@empresa.com",
        descricao_funcionario: "Gestora de contratos",
        ativacao_funcionario: now,
        status_funcionario: true,
        fk_empresa_id_empresa: 1,
        created_at: now,
        updated_at: now
      },
      {
        nome_funcionario: "Pedro Martins",
        contato_funcionario: "35988887777",
        email_funcionario: "pedro@empresa.com",
        descricao_funcionario: "Suporte técnico",
        ativacao_funcionario: now,
        status_funcionario: true,
        fk_empresa_id_empresa: 2,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("funcionario", null, {});
  }
};
