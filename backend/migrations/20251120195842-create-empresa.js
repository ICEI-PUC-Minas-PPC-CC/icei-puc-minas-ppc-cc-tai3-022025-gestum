"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("empresa", {
      id_empresa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      razao_social: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      nome_fantasia: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      cnpj: {
        type: Sequelize.CHAR(14),
        allowNull: false,
        unique: true
      },

      descricao_empresa: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      ativacao_empresa: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      atualizacao_empresa: {
        type: Sequelize.DATE,
        allowNull: true
      },

      desativacao_empresa: {
        type: Sequelize.DATE,
        allowNull: true
      },

      status_empresa: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      fk_plano_id_plano: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "plano",            // tabela Plano
          key: "id_plano"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },

      // padrão Sequelize com timestamps + soft delete
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("empresa");
  }
};
