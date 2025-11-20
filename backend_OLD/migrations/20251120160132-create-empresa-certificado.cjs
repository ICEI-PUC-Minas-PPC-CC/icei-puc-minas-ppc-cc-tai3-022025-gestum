module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("empresa_certificado", {
      id_empresa_certificado: {
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

      fk_certificado_id_certificado: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "certificado",
          key: "id_certificado"
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
    await queryInterface.dropTable("empresa_certificado");
  }
};
