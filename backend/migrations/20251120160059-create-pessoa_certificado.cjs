module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pessoa_certificado", {
      id_pessoa_certificado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    await queryInterface.dropTable("pessoa_certificado");
  }
};
