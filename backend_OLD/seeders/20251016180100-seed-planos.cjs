'use strict';

module.exports = {
  async up (queryInterface) {
    const planos = [
      {
        tipo_plano: 'Gratuito', // ✅ ENUM válido
        valor_plano: 0,
        inicio_plano: new Date(),
        termino_plano: new Date(),
        status_plano: true,
        descricao_plano: 'Plano gratuito básico do sistema.'
      },
      {
        tipo_plano: 'Trial', // ✅ ENUM válido
        valor_plano: 0,
        inicio_plano: new Date(),
        termino_plano: new Date(),
        status_plano: true,
        descricao_plano: 'Versão de teste de 30 dias.'
      },
      {
        tipo_plano: 'Gold', // ✅ ENUM válido
        valor_plano: 199,
        inicio_plano: new Date(),
        termino_plano: new Date(),
        status_plano: true,
        descricao_plano: 'Plano profissional completo.'
      }
    ];

    await queryInterface.bulkInsert('plano', planos, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('plano', {
      tipo_plano: ['Gratuito', 'Trial', 'Gold']
    });
  }
};
