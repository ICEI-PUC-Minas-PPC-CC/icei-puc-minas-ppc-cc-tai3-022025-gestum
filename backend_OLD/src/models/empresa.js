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
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "razao_social"
      },

      nomeFantasia: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "nome_fantasia"
      },

      cnpj: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
        field: "cnpj"
      },

      descricaoEmpresa: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "descricao_empresa"
      },

      ativacaoEmpresa: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "ativacao_empresa"
      },

      atualizacaoEmpresa: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "atualizacao_empresa"
      },

      desativacaoEmpresa: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "desativacao_empresa"
      },

      statusEmpresa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        field: "status_empresa"
      },

      fkPlanoIdPlano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "fk_plano_id_plano"
      }
    },
    {
      tableName: "empresa",
      timestamps: true,
      paranoid: true,
      underscored: true
    }
  );

  Empresa.associate = (models) => {
    Empresa.belongsTo(models.Plano, {
      foreignKey: "fkPlanoIdPlano",
      as: "plano"
    });
  };

  return Empresa;
};
