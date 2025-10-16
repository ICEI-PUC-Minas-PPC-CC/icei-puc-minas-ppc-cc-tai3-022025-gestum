module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plano', {
      id_plano: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      tipo_plano: {
        type: Sequelize.ENUM('Gratuito', 'Trial', 'Básico', 'Silver', 'Gold', 'Diamond'),
        allowNull: false
      },
      valor_plano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      inicio_plano: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      termino_plano: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      status_plano: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      descricao_plano: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('plano');
  }
};
