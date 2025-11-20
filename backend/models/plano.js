"use strict";

module.exports = (sequelize, DataTypes) => {
  const Plano = sequelize.define(
    "Plano",
    {
      id_plano: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo_plano: {
        type: DataTypes.STRING,
        allowNull: false
      },
      valor_plano: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      inicio_plano: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      termino_plano: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      status_plano: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      descricao_plano: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "plano",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true
    }
  );

  Plano.associate = models => {
    Plano.hasMany(models.Empresa, {
      foreignKey: "fk_plano_id_plano",
      as: "empresas"
    });
  };

  return Plano;
};
