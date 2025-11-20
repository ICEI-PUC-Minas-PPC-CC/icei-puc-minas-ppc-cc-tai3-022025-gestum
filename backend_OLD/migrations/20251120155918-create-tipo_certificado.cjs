module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tipo_certificado", {
      id_tipo_certificado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_tipo_certificado: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      descricao_tipo_certificado: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("tipo_certificado");
  }
};
