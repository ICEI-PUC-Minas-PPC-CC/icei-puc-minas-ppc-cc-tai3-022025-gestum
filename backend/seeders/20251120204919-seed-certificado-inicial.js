"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("certificado", [
      {
        nome_certificado: "NR-10 Básico",
        data_emissao: "2024-05-01",
        data_validade: "2026-05-01",
        status_certificado: true,
        ativacao_certificado: now,
        created_at: now,
        updated_at: now
      },
      {
        nome_certificado: "NR-35 Trabalho em Altura",
        data_emissao: "2024-08-10",
        data_validade: "2026-08-10",
        status_certificado: true,
        ativacao_certificado: now,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("certificado", null, {});
  }
};
