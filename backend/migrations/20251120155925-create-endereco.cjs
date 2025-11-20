module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("endereco", {
      id_endereco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      logradouro: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      cep: {
        type: Sequelize.CHAR(8),
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      status_endereco: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      ativacao_endereco: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      atualizacao_endereco: {
        type: Sequelize.DATE,
        allowNull: true
      },
      desativacao_endereco: {
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
    await queryInterface.dropTable("endereco");
  }
};
