export default (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    "Empresa",
    {
      idEmpresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_empresa"
      },

      razaoSocial: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "razao_social"
      },

      cnpj: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
        field: "cnpj"
      },

      fkPlanoIdPlano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "fk_plano_id_plano" // coluna REAL do banco
      }
    },
    {
      tableName: "empresa",
      underscored: true,
      timestamps: true,
      timestamps: true,
      paranoid: true,
      underscored: true

    }
  );

  Empresa.associate = (models) => {
    Empresa.belongsTo(models.Plano, {
      foreignKey: "fkPlanoIdPlano", // usa o NOME DO ATRIBUTO, NÃO o snake_case
      as: "plano"
    });
  };

  return Empresa;
};
