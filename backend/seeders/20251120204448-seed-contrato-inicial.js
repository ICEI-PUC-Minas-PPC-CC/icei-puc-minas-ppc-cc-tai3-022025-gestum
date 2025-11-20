"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("contrato", [
      {
        titulo_contrato: "Contrato de Prestação de Serviços",
        numero_contrato: "CT-001/2025",
        data_inicio: "2025-01-01",
        data_fim: "2026-01-01",
        status_contrato: true,
        descricacao_contrato: "Contrato padrão anual.",
        ativacao_contrato: now,
        created_at: now,
        updated_at: now
      },
      {
        titulo_contrato: "Contrato de Consultoria",
        numero_contrato: "CT-002/2025",
        data_inicio: "2025-02-01",
        data_fim: "2026-02-01",
        status_contrato: true,
        descricacao_contrato: "Consultoria técnica continuada.",
        ativacao_contrato: now,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("contrato", null, {});
  }
};
