export default (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    "Empresa",
    {
      idEmpresa: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      razaoSocial: { type: DataTypes.STRING, allowNull: false },
      cnpj: { type: DataTypes.STRING(14), allowNull: false, unique: true },
      fkPlanoIdPlano: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      tableName: "empresa",
      underscored: true,
      timestamps: true,
      paranoid: true
    }
  );

  Empresa.associate = (models) => {
    Empresa.belongsTo(models.Plano, {
      foreignKey: "fk_plano_id_plano",
      as: "plano"
    });

    Empresa.hasMany(models.Funcionario, {
      foreignKey: "fk_empresa_id_empresa",
      as: "funcionarios"
    });
    Empresa.hasMany(models.Certificado, {
      foreignKey: "fk_empresa_id_empresa",
      as: "certificados"
    });
    Empresa.hasMany(models.Contrato, {
      foreignKey: "fk_empresa_id_empresa",
      as: "contratos"
    });
    Empresa.hasMany(models.Contato, {
      foreignKey: "fk_empresa_id_empresa",
      as: "contatos"
    });
    Empresa.hasMany(models.Endereco, {
      foreignKey: "fk_empresa_id_empresa",
      as: "enderecos"
    });

    Empresa.belongsToMany(models.Contrato, {
      through: models.EmpresaContrato,
      foreignKey: "fk_empresa_id_empresa",
      otherKey: "fk_contrato_id_contrato",
      as: "contratosCompartilhados"
    });

    Empresa.belongsToMany(models.Certificado, {
      through: models.EmpresaCertificado,
      foreignKey: "fk_empresa_id_empresa",
      otherKey: "fk_certificado_id_certificado",
      as: "certificadosCompartilhados"
    });
  };

  return Empresa;
};
