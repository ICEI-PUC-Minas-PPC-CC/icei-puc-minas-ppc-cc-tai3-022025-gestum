module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pessoa_contrato', {
      id_pessoa_contrato: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      categoria_pessoa_contrato: {
        type: Sequelize.ENUM('proprietária', 'terceirizada'),
        allowNull: false
      },
      fk_pessoa_fisica_id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        references: { model: 'pessoa_fisica', key: 'id_pessoa_fisica' },
        onDelete: 'SET NULL'
      },
      fk_contrato_id_contrato: {
        type: Sequelize.INTEGER,
        references: { model: 'contrato', key: 'id_contrato' },
        onDelete: 'SET NULL'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('pessoa_contrato');
  }
};
