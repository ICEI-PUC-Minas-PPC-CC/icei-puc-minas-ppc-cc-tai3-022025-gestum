// /src/models/funcionario.js
module.exports = (sequelize, DataTypes) => {
  const Funcionario = sequelize.define('Funcionario', {
    idFuncionario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cargo: { type: DataTypes.STRING, allowNull: true },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false },
    fkPessoaFisicaIdPessoaFisica: { type: DataTypes.INTEGER, allowNull: true }
  }, {
    tableName: 'funcionario',
    underscored: true,
    timestamps: true,
    paranoid: true
  });

  Funcionario.associate = (models) => {
    Funcionario.belongsTo(models.Empresa, { foreignKey: 'fk_empresa_id_empresa', as: 'empresa' });
    Funcionario.belongsTo(models.PessoaFisica, { foreignKey: 'fk_pessoa_fisica_id_pessoa_fisica', as: 'pessoa' });
  };

  return Funcionario;
};
