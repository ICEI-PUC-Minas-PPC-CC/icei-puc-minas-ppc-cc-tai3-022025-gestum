"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("contatos", [
      {
        campo_contato: "35999998888",
        tipo_contato: "whatsapp",
        descricao_contato: "Contato comercial",
        status_contato: true,
        fk_empresa_id_empresa: 1,
        fk_pessoa_fisica_id_pessoa_fisica: null,
        ativacao_contatos: now,
        created_at: now,
        updated_at: now
      },
      {
        campo_contato: "ana@empresa.com",
        tipo_contato: "email",
        descricao_contato: "Contato pessoal",
        status_contato: true,
        fk_empresa_id_empresa: null,
        fk_pessoa_fisica_id_pessoa_fisica: 1,
        ativacao_contatos: now,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("contatos", null, {});
  }
};
