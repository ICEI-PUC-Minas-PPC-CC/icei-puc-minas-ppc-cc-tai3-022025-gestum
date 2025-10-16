'use strict';

module.exports = {
  async up (queryInterface) {
    // pega o id do plano Gold
    const [planoGold] = await queryInterface.sequelize.query(
      `SELECT id_plano FROM plano WHERE tipo_plano = 'Gold' LIMIT 1;`
    );

    const empresa = {
      razao_social: 'Help Tech LTDA',
      nome_fantasia: 'Help Tech',
      cnpj: '12345678000199',
      descricao_empresa: 'Empresa de tecnologia especializada em soluções empresariais.',
      ativacao_empresa: new Date(),
      atualizacao_empresa: new Date(),
      status_empresa: true,
      fk_plano_id_plano: planoGold?.[0]?.id_plano || null
    };

    await queryInterface.bulkInsert('empresa', [empresa], {});
  },

  async down (queryInterface) {
    // precisa usar "CNPJ" entre aspas duplas na query
    await queryInterface.bulkDelete('empresa', null, {
      where: { '"CNPJ"': '12345678000199' }
    });
  }
};
