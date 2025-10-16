module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pessoa_certificado', {
      id_pessoa_certificado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fk_certificado_id_certificado: {
        type: Sequelize.INTEGER,
        references: { model: 'certificado', key: 'id_certificado' },
        onDelete: 'SET NULL'
      },
      fk_pessoa_fisica_id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        references: { model: 'pessoa_fisica', key: 'id_pessoa_fisica' },
        onDelete: 'SET NULL'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('pessoa_certificado');
  }
};
