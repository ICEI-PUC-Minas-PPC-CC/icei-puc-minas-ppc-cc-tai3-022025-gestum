"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("funcionario", {
      id_funcionario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nome_funcionario: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      contato_funcionario: {
        type: Sequelize.CHAR(14),
        allowNull: false,
        unique: true // número único
      },

      email_funcionario: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      descricao_funcionario: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      ativacao_funcionario: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      atualizacao_funcionario: {
        type: Sequelize.DATE,
        allowNull: true
      },

      desativacao_funcionario: {
        type: Sequelize.DATE,
        allowNull: true
      },

      status_funcionario: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("funcionario");
  }
};
