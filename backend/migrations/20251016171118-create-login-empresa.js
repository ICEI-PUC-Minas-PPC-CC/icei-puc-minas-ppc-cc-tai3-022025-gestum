module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('login_empresa', {
      id_login_empresa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fk_empresa_id_empresa: {
        type: Sequelize.INTEGER,
        references: { model: 'empresa', key: 'id_empresa' },
        onDelete: 'RESTRICT'
      },
      fk_login_id_login: {
        type: Sequelize.INTEGER,
        references: { model: 'login_cliente', key: 'id_login' },
        onDelete: 'SET NULL'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('login_empresa');
  }
};
