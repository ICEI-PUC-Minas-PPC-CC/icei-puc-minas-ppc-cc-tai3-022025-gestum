'use strict';

module.exports = {
  async up (queryInterface) {
    const tipos = [
      { nome_tipo_certificado: 'A1', descricao_tipo_certificado: 'Certificado digital A1 - arquivo.' },
      { nome_tipo_certificado: 'A3', descricao_tipo_certificado: 'Certificado digital A3 - token físico.' }
    ];

    await queryInterface.bulkInsert('tipo_certificado', tipos, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('tipo_certificado', null, {});
  }
};
