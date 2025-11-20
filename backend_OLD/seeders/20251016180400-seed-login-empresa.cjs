'use strict';

module.exports = {
  async up (queryInterface) {
    // pega IDs da empresa e login criados
    const [empresa] = await queryInterface.sequelize.query(
      `SELECT id_empresa FROM empresa WHERE cnpj = '12345678000199' LIMIT 1;`
    );
    const [login] = await queryInterface.sequelize.query(
      `SELECT id_login FROM login_cliente WHERE campo_login = 'admin@helptech.com' LIMIT 1;`
    );

    const vinculo = {
      fk_empresa_id_empresa: empresa?.[0]?.id_empresa || null,
      fk_login_id_login: login?.[0]?.id_login || null
    };

    await queryInterface.bulkInsert('login_empresa', [vinculo], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('login_empresa', null, {});
  }
};
