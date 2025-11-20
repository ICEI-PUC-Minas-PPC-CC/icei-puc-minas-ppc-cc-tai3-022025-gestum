"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("certificado", {
      id_certificado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      code: {
        type: Sequelize.STRING,
        allowNull: true
      },

      issuer: {
        type: Sequelize.STRING,
        allowNull: true
      },

      holder: {
        type: Sequelize.STRING,
        allowNull: true
      },

      issue_date: {
        type: Sequelize.DATE,
        allowNull: true
      },

      expiration_date: {
        type: Sequelize.DATE,
        allowNull: true
      },

      status: {
        type: Sequelize.STRING,
        allowNull: true
      },

      notes: {
        type: Sequelize.TEXT,
        allowNull: true
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

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },

      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("certificado");
  }
};
