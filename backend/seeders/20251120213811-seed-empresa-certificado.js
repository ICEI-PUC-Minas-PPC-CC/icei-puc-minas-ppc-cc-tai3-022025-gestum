"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("empresa_certificado", [
      {
        fk_empresa_id_empresa: 1,
        fk_certificado_id_certificado: 1,
        created_at: now,
        updated_at: now
      },
      {
        fk_empresa_id_empresa: 1,
        fk_certificado_id_certificado: 2,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("empresa_certificado", null, {});
  }
};
