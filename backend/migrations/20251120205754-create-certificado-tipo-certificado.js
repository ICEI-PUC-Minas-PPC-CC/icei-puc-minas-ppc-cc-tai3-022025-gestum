"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("certificado_tipoCertificado", {
      id_certificado_tipocertificado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      fk_tipo_certificado_id_tipo_certificado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipo_certificado",
          key: "id_tipo_certificado"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },

      fk_certificado_id_certificado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "certificado",
          key: "id_certificado"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("certificado_tipoCertificado");
  }
};
