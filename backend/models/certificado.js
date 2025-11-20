"use strict";

module.exports = (sequelize, DataTypes) => {
  const Certificado = sequelize.define(
    "Certificado",
    {
      id_certificado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_certificado: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      data_emissao: {
        type: DataTypes.DATE,
        allowNull: false
      },
      data_validade: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ativacao_certificado: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      atualizacao_certificado: {
        type: DataTypes.DATE
      },
      desativacao_certificado: {
        type: DataTypes.DATE
      },
      status_certificado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      tableName: "certificado",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Certificado.associate = models => {
    // Pivot tables virão depois
    // Certificado.belongsToMany(models.PessoaFisica, {...})
  };

  return Certificado;
};
