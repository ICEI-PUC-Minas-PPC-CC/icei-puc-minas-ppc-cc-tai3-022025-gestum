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

      tipoPlano: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "tipo_plano"
      },

      valorPlano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "valor_plano"
      },

      inicioPlano: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "inicio_plano"
      },

      terminoPlano: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "termino_plano"
      },

      statusPlano: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "status_plano"
      },

      descricaoPlano: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "descricao_plano"
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
      foreignKey: "fkPlanoIdPlano", // nome do atributo do model Empresa
      as: "empresas"
    });
  };

  return Plano;
};
