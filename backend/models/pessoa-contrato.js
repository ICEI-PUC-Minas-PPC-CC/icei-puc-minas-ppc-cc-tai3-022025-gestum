// /src/models/pessoa-contrato.js
module.exports = (sequelize, DataTypes) => {
  const PessoaContrato = sequelize.define('PessoaContrato', {
    fkPessoaFisicaIdPessoaFisica: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    fkContratoIdContrato: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
  }, {
    tableName: 'pessoa_contrato',
    underscored: true,
    timestamps: false,
    paranoid: false
  });

  PessoaContrato.associate = () => {};

  return PessoaContrato;
};
