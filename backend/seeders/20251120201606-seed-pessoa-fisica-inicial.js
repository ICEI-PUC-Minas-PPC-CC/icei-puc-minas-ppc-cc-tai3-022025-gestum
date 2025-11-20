"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert(
      "pessoa_fisica",
      [
        {
          nome_pessoa_fisica: "João da Silva",
          cpf: "12345678901",
          ativacao_pessoa_fisica: now,
          atualizacao_pessoa_fisica: null,
          desativacao_pessoa_fisica: null,
          status_pessoa_fisica: true,
          descricao_pessoa_fisica: "Responsável pela área jurídica.",
          fk_empresa_id_empresa: 1, // assumindo que empresa id 1 existe
          created_at: now,
          updated_at: now,
          deleted_at: null
        },
        {
          nome_pessoa_fisica: "Maria Oliveira",
          cpf: "98765432100",
          ativacao_pessoa_fisica: now,
          atualizacao_pessoa_fisica: null,
          desativacao_pessoa_fisica: null,
          status_pessoa_fisica: true,
          descricao_pessoa_fisica: "Gestora de contratos.",
          fk_empresa_id_empresa: 2, // assumindo empresa id 2
          created_at: now,
          updated_at: now,
          deleted_at: null
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pessoa_fisica", null, {});
  }
};
