module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('endereco', {
      id_endereco: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        type: Sequelize.ENUM(
          'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
          'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
          'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
          'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
          'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
        ),
        allowNull: false
      },
      CEP: {
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
        defaultValue: Sequelize.literal('NOW()')
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
        references: { model: 'empresa', key: 'id_empresa' },
        onDelete: 'RESTRICT'
      },
      fk_pessoa_fisica_id_pessoa_fisica: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'pessoa_fisica', key: 'id_pessoa_fisica' },
        onDelete: 'RESTRICT'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('endereco');
  }
};
