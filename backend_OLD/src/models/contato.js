export default (sequelize, DataTypes) => {
  const Contato = sequelize.define(
    "Contato",
    {
      idContato: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: true },
      telefone: { type: DataTypes.STRING, allowNull: true },
      fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      tableName: "contato",
      underscored: true,
      timestamps: true,
      paranoid: true
    }
  );

  Contato.associate = (models) => {
    Contato.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });
  };

  return Contato;
};
