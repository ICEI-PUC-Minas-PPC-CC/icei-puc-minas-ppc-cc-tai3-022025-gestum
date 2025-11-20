"use strict";

module.exports = (sequelize, DataTypes) => {
  const EmpresaCertificado = sequelize.define(
    "EmpresaCertificado",
    {
      id_empresa_certificado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fk_empresa_id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fk_certificado_id_certificado: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "empresa_certificado",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  EmpresaCertificado.associate = models => {
    EmpresaCertificado.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });

    EmpresaCertificado.belongsTo(models.Certificado, {
      foreignKey: "fk_certificado_id_certificado",
      as: "certificado"
    });
  };

  return EmpresaCertificado;
};
