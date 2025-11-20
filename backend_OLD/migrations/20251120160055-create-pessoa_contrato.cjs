module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pessoa_contrato", {
      id_pessoa_contrato: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      categoria_pessoa_contrato: {
        type: Sequelize.STRING(20),
        allowNull: false
      },

      fk_pessoa_fisica_id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "pessoa_fisica",
          key: "id_pessoa_fisica"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },

      fk_contrato_id_contrato: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "contrato",
          key: "id_contrato"
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
    await queryInterface.dropTable("pessoa_contrato");
  }
};
