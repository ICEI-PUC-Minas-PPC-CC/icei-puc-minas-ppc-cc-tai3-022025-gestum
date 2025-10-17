// /src/models/tipo-certificado.js
module.exports = (sequelize, DataTypes) => {
  const TipoCertificado = sequelize.define('TipoCertificado', {
    idTipoCertificado: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true }
  }, {
    tableName: 'tipo_certificado',
    underscored: true,
    timestamps: true,
    paranoid: true
  });

  TipoCertificado.associate = (models) => {
    TipoCertificado.belongsToMany(models.Certificado, {
      through: models.CertificadoTipoCertificado,
      foreignKey: 'fk_tipo_certificado_id_tipo_certificado',
      otherKey: 'fk_certificado_id_certificado',
      as: 'certificados'
    });
  };

  return TipoCertificado;
};
