"use strict";

module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
      id_endereco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      logradouro: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      numero: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      bairro: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cidade: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      cep: {
        type: DataTypes.CHAR(8),
        allowNull: false
      },
      complemento: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      status_endereco: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      fk_empresa_id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      fk_pessoa_fisica_id_pessoa_fisica: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: "endereco",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Endereco.associate = models => {
    Endereco.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });

    Endereco.belongsTo(models.PessoaFisica, {
      foreignKey: "fk_pessoa_fisica_id_pessoa_fisica",
      as: "pessoa_fisica"
    });
  };

  return Endereco;
};
