module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("certificado", {
      id_certificado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_certificado: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      data_emissao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_validade: {
        type: Sequelize.DATE,
        allowNull: false
      },

      ativacao_certificado: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      atualizacao_certificado: {
        type: Sequelize.DATE,
        allowNull: true
      },
      desativacao_certificado: {
        type: Sequelize.DATE,
        allowNull: true
      },

      status_certificado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    await queryInterface.dropTable("certificado");
  }
};
