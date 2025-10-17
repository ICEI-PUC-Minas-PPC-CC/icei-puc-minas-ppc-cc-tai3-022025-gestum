// /src/models/empresa-certificado.js
module.exports = (sequelize, DataTypes) => {
  const EmpresaCertificado = sequelize.define('EmpresaCertificado', {
    fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    fkCertificadoIdCertificado: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
  }, {
    tableName: 'empresa_certificado',
    underscored: true,
    timestamps: false,
    paranoid: false
  });

  EmpresaCertificado.associate = () => {};

  return EmpresaCertificado;
};
