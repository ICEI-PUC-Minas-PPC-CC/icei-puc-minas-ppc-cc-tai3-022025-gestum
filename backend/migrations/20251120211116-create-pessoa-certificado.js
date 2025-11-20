"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pessoa_certificado", {
      id_pessoa_certificado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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

      fk_pessoa_fisica_id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pessoa_fisica",
          key: "id_pessoa_fisica"
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
    await queryInterface.dropTable("pessoa_certificado");
  }
};
