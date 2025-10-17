// /src/models/certificado.js
module.exports = (sequelize, DataTypes) => {
  const Certificado = sequelize.define('Certificado', {
    idCertificado: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, allowNull: true },
    issuer: { type: DataTypes.STRING, allowNull: true },
    holder: { type: DataTypes.STRING, allowNull: true },
    issueDate: { type: DataTypes.DATE, allowNull: true },
    expirationDate: { type: DataTypes.DATE, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: true },
    notes: { type: DataTypes.TEXT, allowNull: true },
    fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: 'certificado',
    underscored: true,
    timestamps: true,
    paranoid: true
  });

  Certificado.associate = (models) => {
    Certificado.belongsTo(models.Empresa, { foreignKey: 'fk_empresa_id_empresa', as: 'empresa' });

    // N:N
    Certificado.belongsToMany(models.TipoCertificado, {
      through: models.CertificadoTipoCertificado,
      foreignKey: 'fk_certificado_id_certificado',
      otherKey: 'fk_tipo_certificado_id_tipo_certificado',
      as: 'tipos'
    });

    // N:N com PessoaFisica (quem detém ou está vinculado)
    Certificado.belongsToMany(models.PessoaFisica, {
      through: models.PessoaCertificado,
      foreignKey: 'fk_certificado_id_certificado',
      otherKey: 'fk_pessoa_fisica_id_pessoa_fisica',
      as: 'pessoas'
    });

    // N:N opcional com Empresa (multi-empresa)
    Certificado.belongsToMany(models.Empresa, {
      through: models.EmpresaCertificado,
      foreignKey: 'fk_certificado_id_certificado',
      otherKey: 'fk_empresa_id_empresa',
      as: 'empresas'
    });
  };

  return Certificado;
};
