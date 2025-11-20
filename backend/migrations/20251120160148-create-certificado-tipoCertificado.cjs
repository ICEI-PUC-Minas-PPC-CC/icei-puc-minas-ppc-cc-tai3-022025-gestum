module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("certificado_tipocertificado", {
      id_certificado_tipocertificado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      fk_tipo_certificado_id_tipo_certificado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipo_certificado",
          key: "id_tipo_certificado"
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
    await queryInterface.dropTable("certificado_tipocertificado");
  }
};
