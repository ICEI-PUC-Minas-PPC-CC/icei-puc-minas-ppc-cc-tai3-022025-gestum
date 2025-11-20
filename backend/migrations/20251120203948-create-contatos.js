"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contatos", {
      id_contatos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      campo_contato: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      tipo_contato: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [["whatsapp", "celular", "telefone", "email"]]
        }
      },

      descricao_contato: {
        type: Sequelize.STRING(30),
        allowNull: false
      },

      status_contato: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      ativacao_contatos: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      atualizacao_contatos: {
        type: Sequelize.DATE,
        allowNull: true
      },

      desativacao_contatos: {
        type: Sequelize.DATE,
        allowNull: true
      },

      fk_empresa_id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "empresa",
          key: "id_empresa"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },

      fk_pessoa_fisica_id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "pessoa_fisica",
          key: "id_pessoa_fisica"
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
    await queryInterface.dropTable("contatos");
  }
};
