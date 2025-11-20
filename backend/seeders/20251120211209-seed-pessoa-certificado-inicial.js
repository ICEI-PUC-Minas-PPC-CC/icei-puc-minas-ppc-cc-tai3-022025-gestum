"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    // Exemplo: pessoa 1 tem certificado 1 e 2
    await queryInterface.bulkInsert("pessoa_certificado", [
      {
        fk_certificado_id_certificado: 1,
        fk_pessoa_fisica_id_pessoa_fisica: 1,
        created_at: now,
        updated_at: now
      },
      {
        fk_certificado_id_certificado: 2,
        fk_pessoa_fisica_id_pessoa_fisica: 1,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("pessoa_certificado", null, {});
  }
};
