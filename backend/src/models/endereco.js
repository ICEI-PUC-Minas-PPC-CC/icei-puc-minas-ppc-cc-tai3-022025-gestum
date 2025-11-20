export default (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
      idEndereco: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      logradouro: { type: DataTypes.STRING, allowNull: false },
      numero: { type: DataTypes.STRING, allowNull: true },
      complemento: { type: DataTypes.STRING, allowNull: true },
      bairro: { type: DataTypes.STRING, allowNull: true },
      cidade: { type: DataTypes.STRING, allowNull: true },
      estado: { type: DataTypes.STRING(2), allowNull: true },
      cep: { type: DataTypes.STRING(8), allowNull: true },
      fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      tableName: "endereco",
      underscored: true,
      timestamps: true,
      paranoid: true
    }
  );

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });
  };

  return Endereco;
};
