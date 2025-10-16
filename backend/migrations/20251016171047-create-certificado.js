module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('certificado', {
      id_certificado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome_certificado: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      data_emissao: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      data_validade: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      ativacao_certificado: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
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
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('certificado');
  }
};
