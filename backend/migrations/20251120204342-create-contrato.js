"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contrato", {
      id_contrato: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      titulo_contrato: {
        type: Sequelize.STRING(100),
        allowNull: false
      },

      numero_contrato: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },

      ativacao_contrato: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      data_fim: {
        type: Sequelize.DATE,
        allowNull: false
      },

      atualizacao_contrato: {
        type: Sequelize.DATE,
        allowNull: true
      },

      desativacao_contrato: {
        type: Sequelize.DATE,
        allowNull: true
      },

      status_contrato: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      descricacao_contrato: {
        type: Sequelize.TEXT,
        allowNull: true
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
    await queryInterface.dropTable("contrato");
  }
};
