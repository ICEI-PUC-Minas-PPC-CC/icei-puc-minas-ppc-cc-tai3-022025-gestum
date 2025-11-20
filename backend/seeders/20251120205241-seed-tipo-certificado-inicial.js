"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("tipo_certificado", [
      {
        nome_tipo_certificado: "NR-10",
        descricao_tipo_certificado: "Segurança em instalações elétricas.",
        created_at: now,
        updated_at: now
      },
      {
        nome_tipo_certificado: "NR-35",
        descricao_tipo_certificado: "Trabalho em altura.",
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("tipo_certificado", null, {});
  }
};
