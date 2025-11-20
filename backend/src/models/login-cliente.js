export default (sequelize, DataTypes) => {
  const LoginCliente = sequelize.define(
    "LoginCliente",
    {
      idLoginCliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      passwordHash: { type: DataTypes.STRING, allowNull: false },
      isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
      fkEmpresaIdEmpresa: { type: DataTypes.INTEGER, allowNull: true }
    },
    {
      tableName: "login_cliente",
      underscored: true,
      timestamps: true,
      paranoid: true
    }
  );

  LoginCliente.associate = (models) => {
    LoginCliente.belongsTo(models.Empresa, {
      foreignKey: "fk_empresa_id_empresa",
      as: "empresa"
    });
  };

  return LoginCliente;
};
