module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("plano", {
      id_plano: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo_plano: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor_plano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      inicio_plano: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      termino_plano: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      status_plano: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      descricao_plano: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("plano");
  }
};
