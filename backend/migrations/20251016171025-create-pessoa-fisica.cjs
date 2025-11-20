module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pessoa_fisica', {
      id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome_pessoa_fisica: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      CPF: {
        type: Sequelize.CHAR(11),
        unique: true,
        allowNull: false
      },
      ativacao_pessoa_fisica: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      atualizacao_pessoa_fisica: {
        type: Sequelize.DATE,
        allowNull: true
      },
      desativacao_pessoa_fisica: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status_pessoa_fisica: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      descricao_pessoa_fisica: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fk_empresa_id_empresa: {
        type: Sequelize.INTEGER,
        references: { model: 'empresa', key: 'id_empresa' },
        onDelete: 'CASCADE'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('pessoa_fisica');
  }
};
