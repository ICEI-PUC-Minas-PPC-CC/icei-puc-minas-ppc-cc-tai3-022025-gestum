module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('login_cliente', {
      id_login: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      campo_login: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      senha_login: {
        type: Sequelize.STRING(20),
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('login_cliente');
  }
};
