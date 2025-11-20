"use strict";

module.exports = (sequelize, DataTypes) => {
  const PessoaFisica = sequelize.define(
    "PessoaFisica",
    {
      id_pessoa_fisica: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_pessoa_fisica: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cpf: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        unique: true
      },
      ativacao_pessoa_fisica: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      atualizacao_pessoa_fisica: {
        type: DataTypes.DATE,
        allowNull: true
      },
      desativacao_pessoa_fisica: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status_pessoa_fisica: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      descricao_pessoa_fisica: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      fk_empresa_id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "pessoa_fisica",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  PessoaFisica.associate = models => {
    PessoaFisica.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });
  };

  return PessoaFisica;
};
