// /src/models/pessoa-certificado.js
module.exports = (sequelize, DataTypes) => {
  const PessoaCertificado = sequelize.define('PessoaCertificado', {
    fkPessoaFisicaIdPessoaFisica: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    fkCertificadoIdCertificado: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
  }, {
    tableName: 'pessoa_certificado',
    underscored: true,
    timestamps: false,
    paranoid: false
  });

  PessoaCertificado.associate = () => {};

  return PessoaCertificado;
};
