// /scripts/test-models.js
const db = require('../models');

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('✅ Conexão OK com o banco de dados.');
    const loaded = Object.keys(db).filter(k => !['sequelize', 'Sequelize'].includes(k));
    console.log('Models carregados:', loaded);

    // valida se associate foi executado (checagem simples)
    loaded.forEach(name => {
      const m = db[name];
      if (!m) return;
      if (typeof m.associations === 'object') {
        console.log(`🔗 ${name} associações:`, Object.keys(m.associations));
      }
    });

    // Não executa sync forçado para não conflitar com migrações
    await db.sequelize.sync({ alter: false });
  } catch (err) {
    console.error('❌ Erro de conexão/associação:', err);
  } finally {
    await db.sequelize.close();
  }
})();
