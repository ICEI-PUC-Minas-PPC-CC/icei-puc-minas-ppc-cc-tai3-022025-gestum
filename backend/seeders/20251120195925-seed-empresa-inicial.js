"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert(
      "empresa",
      [
        {
          razao_social: "Help Tech Soluções em TI LTDA",
          nome_fantasia: "Help Tech",
          cnpj: "12345678000199",
          descricao_empresa: "Empresa de soluções em tecnologia da informação.",
          ativacao_empresa: now,
          atualizacao_empresa: null,
          desativacao_empresa: null,
          status_empresa: true,
          fk_plano_id_plano: null, // depois amarramos com o plano certo
          created_at: now,
          updated_at: now,
          deleted_at: null
        },
        {
          razao_social: "Pollo Engenharia LTDA",
          nome_fantasia: "Pollo Engenharia",
          cnpj: "98765432000155",
          descricao_empresa: "Empresa de engenharia parceira do Gestum.",
          ativacao_empresa: now,
          atualizacao_empresa: null,
          desativacao_empresa: null,
          status_empresa: true,
          fk_plano_id_plano: null,
          created_at: now,
          updated_at: now,
          deleted_at: null
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("empresa", null, {});
  }
};
