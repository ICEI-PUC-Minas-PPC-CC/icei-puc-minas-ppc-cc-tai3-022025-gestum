module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contrato', {
      id_contrato: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      titulo_contrato: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      numero_contrato: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      ativacao_contrato: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      data_fim: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      atualizacao_contrato: {
        type: Sequelize.DATE,
        allowNull: true
      },
      desativacao_contrato: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status_contrato: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      descricacao_contrato: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('contrato');
  }
};
