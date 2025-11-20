module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("empresa", {
      id_empresa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        defaultValue: Sequelize.literal("NOW()")
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
          model: "plano",
          key: "id_plano"
        },
        onDelete: "SET NULL",
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
    await queryInterface.dropTable("empresa");
  }
};
