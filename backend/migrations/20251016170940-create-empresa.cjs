"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("empresa", {
      id_empresa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      razao_social: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
      },

      fk_plano_id_plano: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "plano",
          key: "id_plano"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },

      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("empresa");
  }
};
