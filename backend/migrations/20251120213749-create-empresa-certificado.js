"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("empresa_certificado", {
      id_empresa_certificado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      fk_empresa_id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "empresa",
          key: "id_empresa"
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
    await queryInterface.dropTable("empresa_certificado");
  }
};
