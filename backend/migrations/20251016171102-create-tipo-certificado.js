module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tipo_certificado', {
      id_tipo_certificado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome_tipo_certificado: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      descricao_tipo_certificado: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('tipo_certificado');
  }
};
