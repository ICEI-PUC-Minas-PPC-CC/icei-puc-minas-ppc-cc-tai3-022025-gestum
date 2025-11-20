export default (sequelize, DataTypes) => {
  const Plano = sequelize.define(
    "Plano",
    {
      idPlano: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_plano"
      },
      nome: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      descricao: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      ativo: { 
        type: DataTypes.BOOLEAN, 
        allowNull: false, 
        defaultValue: true 
      }
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
      foreignKey: "fkPlanoIdPlano",  // 🔥 AQUI É O AJUSTE QUE RESOLVE TUDO
      as: "empresas"
    });
  };

  return Plano;
};
