"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("plano", {
      id_plano: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      tipo_plano: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["Gratuito", "Trial", "Básico", "Silver", "Gold", "Diamond"]]
        }
      },

      valor_plano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      inicio_plano: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      termino_plano: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },

      status_plano: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      descricao_plano: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("plano");
  }
};
