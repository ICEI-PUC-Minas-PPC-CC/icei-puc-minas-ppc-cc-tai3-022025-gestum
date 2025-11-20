"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert(
      "plano",
      [
        {
          tipo_plano: "Gratuito",
          valor_plano: 0,
          inicio_plano: now,
          termino_plano: now,
          status_plano: true,
          descricao_plano: "Plano gratuito com recursos limitados.",
          created_at: now,
          updated_at: now,
          deleted_at: null
        },
        {
          tipo_plano: "Básico",
          valor_plano: 49,
          inicio_plano: now,
          termino_plano: now,
          status_plano: true,
          descricao_plano: "Plano básico para pequenas empresas.",
          created_at: now,
          updated_at: now,
          deleted_at: null
        },
        {
          tipo_plano: "Gold",
          valor_plano: 199,
          inicio_plano: now,
          termino_plano: now,
          status_plano: true,
          descricao_plano: "Plano avançado com recursos completos.",
          created_at: now,
          updated_at: now,
          deleted_at: null
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("plano", null, {});
  }
};
