"use strict";

module.exports = (sequelize, DataTypes) => {
  const Funcionario = sequelize.define(
    "Funcionario",
    {
      id_funcionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_funcionario: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      contato_funcionario: {
        type: DataTypes.CHAR(14),
        allowNull: false,
        unique: true
      },
      email_funcionario: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      descricao_funcionario: {
        type: DataTypes.TEXT
      },
      ativacao_funcionario: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      atualizacao_funcionario: {
        type: DataTypes.DATE
      },
      desativacao_funcionario: {
        type: DataTypes.DATE
      },
      status_funcionario: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      fk_empresa_id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "funcionario",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Funcionario.associate = models => {
    Funcionario.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });
  };

  return Funcionario;
};
