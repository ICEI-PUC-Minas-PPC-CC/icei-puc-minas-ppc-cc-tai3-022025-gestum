"use strict";

module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    "Empresa",
    {
      id_empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      razao_social: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      nome_fantasia: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cnpj: {
        type: DataTypes.CHAR(14),
        allowNull: false,
        unique: true
      },
      descricao_empresa: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      ativacao_empresa: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      atualizacao_empresa: {
        type: DataTypes.DATE,
        allowNull: true
      },
      desativacao_empresa: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status_empresa: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      fk_plano_id_plano: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: "empresa",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Empresa.associate = models => {
    // depois a gente cola aqui:
    // Empresa.belongsTo(models.Plano, { foreignKey: "fk_plano_id_plano", as: "plano" });
  };

  return Empresa;
};
