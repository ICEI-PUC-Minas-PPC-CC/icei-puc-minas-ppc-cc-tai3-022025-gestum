export default (sequelize, DataTypes) => {
  const Plano = sequelize.define(
    "Plano",
    {
      idPlano: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: { type: DataTypes.STRING, allowNull: false },
      descricao: { type: DataTypes.TEXT, allowNull: true },
      ativo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
    },
    {
      tableName: "plano",
      underscored: true,
      timestamps: true,
      paranoid: true
    }
  );

  Plano.associate = (models) => {
    Plano.hasMany(models.Empresa, {
      foreignKey: "fk_plano_id_plano",
      as: "empresas"
    });
  };

  return Plano;
};
