"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pessoa_fisica", {
      id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nome_pessoa_fisica: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true
      },

      ativacao_pessoa_fisica: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      atualizacao_pessoa_fisica: {
        type: Sequelize.DATE,
        allowNull: true
      },

      desativacao_pessoa_fisica: {
        type: Sequelize.DATE,
        allowNull: true
      },

      status_pessoa_fisica: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      descricao_pessoa_fisica: {
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
        onDelete: "CASCADE"
      },

      // padrão sequelize
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pessoa_fisica");
  }
};
