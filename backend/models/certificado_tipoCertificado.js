"use strict";

module.exports = (sequelize, DataTypes) => {
  const CertificadoTipoCertificado = sequelize.define(
    "CertificadoTipoCertificado",
    {
      id_certificado_tipocertificado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fk_tipo_certificado_id_tipo_certificado: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fk_certificado_id_certificado: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "certificado_tipoCertificado",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  CertificadoTipoCertificado.associate = models => {
    CertificadoTipoCertificado.belongsTo(models.TipoCertificado, {
      foreignKey: "fk_tipo_certificado_id_tipo_certificado",
      as: "tipo"
    });

    CertificadoTipoCertificado.belongsTo(models.Certificado, {
      foreignKey: "fk_certificado_id_certificado",
      as: "certificado"
    });
  };

  return CertificadoTipoCertificado;
};
