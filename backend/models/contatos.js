"use strict";

module.exports = (sequelize, DataTypes) => {
  const Contatos = sequelize.define(
    "Contatos",
    {
      id_contatos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      campo_contato: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      tipo_contato: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      descricao_contato: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      status_contato: {
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
      tableName: "contatos",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Contatos.associate = models => {
    Contatos.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });

    Contatos.belongsTo(models.PessoaFisica, {
      foreignKey: "fk_pessoa_fisica_id_pessoa_fisica",
      as: "pessoa_fisica"
    });
  };

  return Contatos;
};
