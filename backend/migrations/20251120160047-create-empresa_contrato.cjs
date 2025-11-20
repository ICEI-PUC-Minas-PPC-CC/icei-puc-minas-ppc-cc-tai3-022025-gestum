module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("empresa_contrato", {
      id_empresa_contrato: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      categoria_empresa_contrato: {
        type: Sequelize.STRING(20),
        allowNull: false
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
    await queryInterface.dropTable("empresa_contrato");
  }
};
