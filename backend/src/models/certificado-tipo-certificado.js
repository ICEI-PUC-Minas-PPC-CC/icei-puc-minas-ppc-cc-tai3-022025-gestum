export default (sequelize, DataTypes) => {
  const CertificadoTipoCertificado = sequelize.define(
    "CertificadoTipoCertificado",
    {
      fkCertificadoIdCertificado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      fkTipoCertificadoIdTipoCertificado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: "certificado_tipo_certificado",
      underscored: true,
      timestamps: false,
      paranoid: false
    }
  );

  CertificadoTipoCertificado.associate = () => {};

  return CertificadoTipoCertificado;
};
