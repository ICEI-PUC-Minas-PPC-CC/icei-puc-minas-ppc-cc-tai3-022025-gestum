module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("documento", {
      id_documento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_documento: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      caminho_url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      tipo_mime: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      tamanho_bytes: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      hash_documento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao_documento: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      ativacao_documento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      atualizacao_documento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      desativacao_documento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status_documento: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      fk_contrato_id_contrato: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "contrato",
          key: "id_contrato"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },

      fk_certificado_id_certificado: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "certificado",
          key: "id_certificado"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("documento");
  }
};
