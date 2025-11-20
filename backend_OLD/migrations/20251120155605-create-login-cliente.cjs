module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("login_cliente", {
      id_login: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      campo_login: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      senha_login: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("login_cliente");
  }
};
