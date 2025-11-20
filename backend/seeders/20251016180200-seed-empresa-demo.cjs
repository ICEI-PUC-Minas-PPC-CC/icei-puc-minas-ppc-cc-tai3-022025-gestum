'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    const [planoGold] = await queryInterface.sequelize.query(
      `SELECT id_plano FROM plano WHERE tipo_plano = 'Gold' LIMIT 1;`
    );

    await queryInterface.bulkInsert('empresa', [
      {
        nome_fantasia: 'Help Tech PC',
        razao_social: 'Help Tech LTDA',
        status_empresa: true,
        cnpj: '12345678000199',
        fk_plano_id_plano: planoGold?.[0]?.id_plano || 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('empresa', { cnpj: '12345678000199' });
  }
};
