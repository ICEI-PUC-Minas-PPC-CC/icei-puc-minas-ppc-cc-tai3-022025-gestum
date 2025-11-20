"use strict";

module.exports = (sequelize, DataTypes) => {
  const TipoCertificado = sequelize.define(
    "TipoCertificado",
    {
      id_tipo_certificado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_tipo_certificado: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      descricao_tipo_certificado: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "tipo_certificado",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  TipoCertificado.associate = models => {
    // usado depois na pivot:
    // TipoCertificado.belongsToMany(models.Certificado, { through: models.CertificadoTipoCertificado });
  };

  return TipoCertificado;
};
