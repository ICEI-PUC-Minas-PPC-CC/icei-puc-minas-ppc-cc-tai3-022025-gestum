'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface) {
    const senhaHash = await bcrypt.hash('Admin@123', 10);

    const admin = {
      campo_login: 'admin@helptech.com',
      senha_login: senhaHash
    };

    await queryInterface.bulkInsert('login_cliente', [admin], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('login_cliente', { campo_login: 'admin@helptech.com' });
  }
};
