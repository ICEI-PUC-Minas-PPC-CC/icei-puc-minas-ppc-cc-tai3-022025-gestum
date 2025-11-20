"use strict";

module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define(
    "Documento",
    {
      id_documento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_documento: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      caminho_url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      tipo_mime: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      tamanho_bytes: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      hash_documento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao_documento: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      fk_contrato_id_contrato: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      fk_certificado_id_certificado: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: "documento",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Documento.associate = models => {
    Documento.belongsTo(models.Contrato, {
      foreignKey: "fk_contrato_id_contrato",
      as: "contrato"
    });

    Documento.belongsTo(models.Certificado, {
      foreignKey: "fk_certificado_id_certificado",
      as: "certificado"
    });
  };

  return Documento;
};
