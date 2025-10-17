// /src/models/pessoa-fisica.js
module.exports = (sequelize, DataTypes) => {
  const PessoaFisica = sequelize.define('PessoaFisica', {
    idPessoaFisica: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING(11), allowNull: true, unique: true },
    email: { type: DataTypes.STRING, allowNull: true },
    telefone: { type: DataTypes.STRING, allowNull: true }
  }, {
    tableName: 'pessoa_fisica',
    underscored: true,
    timestamps: true,
    paranoid: true
  });

  PessoaFisica.associate = (models) => {
    PessoaFisica.hasMany(models.Funcionario, {
      foreignKey: 'fk_pessoa_fisica_id_pessoa_fisica',
      as: 'funcionarios'
    });

    PessoaFisica.belongsToMany(models.Contrato, {
      through: models.PessoaContrato,
      foreignKey: 'fk_pessoa_fisica_id_pessoa_fisica',
      otherKey: 'fk_contrato_id_contrato',
      as: 'contratos'
    });

    PessoaFisica.belongsToMany(models.Certificado, {
      through: models.PessoaCertificado,
      foreignKey: 'fk_pessoa_fisica_id_pessoa_fisica',
      otherKey: 'fk_certificado_id_certificado',
      as: 'certificados'
    });
  };

  return PessoaFisica;
};
