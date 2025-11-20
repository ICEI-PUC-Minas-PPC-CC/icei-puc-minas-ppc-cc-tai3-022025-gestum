module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("login_empresa", {
      id_login_empresa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      fk_empresa_id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "empresa",
          key: "id_empresa"
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
      },

      fk_login_id_login: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "login_cliente",
          key: "id_login"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable("login_empresa");
  }
};
