module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresa_certificado', {
      id_empresa_certificado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fk_empresa_id_empresa: {
        type: Sequelize.INTEGER,
        references: { model: 'empresa', key: 'id_empresa' },
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
    await queryInterface.dropTable('empresa_certificado');
  }
};
