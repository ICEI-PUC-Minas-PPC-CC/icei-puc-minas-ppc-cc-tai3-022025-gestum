module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresa_contrato', {
      id_empresa_contrato: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      categoria_empresa_contrato: {
        type: Sequelize.ENUM('proprietária', 'terceirizada'),
        allowNull: false
      },
      fk_empresa_id_empresa: {
        type: Sequelize.INTEGER,
        references: { model: 'empresa', key: 'id_empresa' },
        onDelete: 'RESTRICT'
      },
      fk_contrato_id_contrato: {
        type: Sequelize.INTEGER,
        references: { model: 'contrato', key: 'id_contrato' },
        onDelete: 'SET NULL'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('empresa_contrato');
  }
};
