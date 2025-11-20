"use strict";

module.exports = (sequelize, DataTypes) => {
  const Contrato = sequelize.define(
    "Contrato",
    {
      id_contrato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo_contrato: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      numero_contrato: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      data_inicio: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ativacao_contrato: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      data_fim: {
        type: DataTypes.DATE,
        allowNull: false
      },
      atualizacao_contrato: {
        type: DataTypes.DATE
      },
      desativacao_contrato: {
        type: DataTypes.DATE
      },
      status_contrato: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      descricacao_contrato: {
        type: DataTypes.TEXT
      }
    },
    {
      tableName: "contrato",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Contrato.associate = models => {
    // mais tarde:
    // Contrato.belongsToMany(models.Empresa, { through: models.EmpresaContrato });
    // Contrato.belongsToMany(models.PessoaFisica, { through: models.PessoaContrato });
  };

  return Contrato;
};
