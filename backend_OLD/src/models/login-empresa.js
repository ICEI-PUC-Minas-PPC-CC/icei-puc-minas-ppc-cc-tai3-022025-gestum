export default (sequelize, DataTypes) => {
  const LoginEmpresa = sequelize.define(
    "LoginEmpresa",
    {
      idLoginEmpresa: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      passwordHash: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false, defaultValue: "viewer" },
      isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
      fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      tableName: "login_empresa",
      underscored: true,
      timestamps: true,
      paranoid: true
    }
  );

  LoginEmpresa.associate = (models) => {
    LoginEmpresa.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });
  };

  return LoginEmpresa;
};
