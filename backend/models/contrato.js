// /src/models/contrato.js
module.exports = (sequelize, DataTypes) => {
  const Contrato = sequelize.define('Contrato', {
    idContrato: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    partyA: { type: DataTypes.STRING, allowNull: true },
    partyB: { type: DataTypes.STRING, allowNull: true },
    startDate: { type: DataTypes.DATE, allowNull: true },
    expirationDate: { type: DataTypes.DATE, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: true },
    value: { type: DataTypes.DECIMAL, allowNull: true },
    fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: 'contrato',
    underscored: true,
    timestamps: true,
    paranoid: true
  });

  Contrato.associate = (models) => {
    Contrato.belongsTo(models.Empresa, { foreignKey: 'fk_empresa_id_empresa', as: 'empresa' });

    // N:N com PessoaFisica (partes, responsáveis etc.)
    Contrato.belongsToMany(models.PessoaFisica, {
      through: models.PessoaContrato,
      foreignKey: 'fk_contrato_id_contrato',
      otherKey: 'fk_pessoa_fisica_id_pessoa_fisica',
      as: 'pessoas'
    });

    // N:N opcional com Empresa (multi-empresa)
    Contrato.belongsToMany(models.Empresa, {
      through: models.EmpresaContrato,
      foreignKey: 'fk_contrato_id_contrato',
      otherKey: 'fk_empresa_id_empresa',
      as: 'empresas'
    });
  };

  return Contrato;
};
