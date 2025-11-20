module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contatos", {
      id_contatos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      campo_contato: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      tipo_contato: {
        type: Sequelize.STRING(20),
        allowNull: false
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
        defaultValue: Sequelize.literal("NOW()")
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
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
      },

      fk_pessoa_fisica_id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "pessoa_fisica",
          key: "id_pessoa_fisica"
        },
        onDelete: "RESTRICT",
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
    await queryInterface.dropTable("contatos");
  }
};
