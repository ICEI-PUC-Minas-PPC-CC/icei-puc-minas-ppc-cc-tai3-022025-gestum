module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('certificado_tipocertificado', {
      id_certificado_tipocertificado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fk_tipo_certificado_id_tipo_certificado: {
        type: Sequelize.INTEGER,
        references: { model: 'tipo_certificado', key: 'id_tipo_certificado' },
        onDelete: 'RESTRICT'
      },
      fk_certificado_id_certificado: {
        type: Sequelize.INTEGER,
        references: { model: 'certificado', key: 'id_certificado' },
        onDelete: 'SET NULL'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('certificado_tipocertificado');
  }
};
