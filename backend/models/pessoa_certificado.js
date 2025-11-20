"use strict";

module.exports = (sequelize, DataTypes) => {
  const PessoaCertificado = sequelize.define(
    "PessoaCertificado",
    {
      id_pessoa_certificado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fk_certificado_id_certificado: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fk_pessoa_fisica_id_pessoa_fisica: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "pessoa_certificado",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  PessoaCertificado.associate = models => {
    PessoaCertificado.belongsTo(models.Certificado, {
      foreignKey: "fk_certificado_id_certificado",
      as: "certificado"
    });

    PessoaCertificado.belongsTo(models.PessoaFisica, {
      foreignKey: "fk_pessoa_fisica_id_pessoa_fisica",
      as: "pessoa"
    });
  };

  return PessoaCertificado;
};
