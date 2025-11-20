"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("certificado_tipoCertificado", [
      {
        fk_tipo_certificado_id_tipo_certificado: 1,
        fk_certificado_id_certificado: 1,
        created_at: now,
        updated_at: now
      },
      {
        fk_tipo_certificado_id_tipo_certificado: 2,
        fk_certificado_id_certificado: 1,
        created_at: now,
        updated_at: now
      },
      {
        fk_tipo_certificado_id_tipo_certificado: 2,
        fk_certificado_id_certificado: 2,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("certificado_tipoCertificado", null, {});
  }
};
