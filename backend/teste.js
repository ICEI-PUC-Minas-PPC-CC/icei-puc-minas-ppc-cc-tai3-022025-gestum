const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestum', 'postgres', 'SUA_SENHA', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida');
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
}

testConnection();