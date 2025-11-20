export default (sequelize, DataTypes) => {
  const EmpresaContrato = sequelize.define(
    "EmpresaContrato",
    {
      fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      fkContratoIdContrato: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
    },
    {
      tableName: "empresa_contrato",
      underscored: true,
      timestamps: false,
      paranoid: false
    }
  );

  EmpresaContrato.associate = () => {};

  return EmpresaContrato;
};
