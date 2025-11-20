"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("endereco", [
      {
        logradouro: "Rua A",
        numero: "100",
        bairro: "Centro",
        cidade: "Poços de Caldas",
        estado: "Minas Gerais",
        cep: "37701000",
        complemento: "Sala 10",
        status_endereco: true,
        fk_empresa_id_empresa: 1,
        fk_pessoa_fisica_id_pessoa_fisica: null,
        created_at: now,
        updated_at: now
      },
      {
        logradouro: "Av Brasil",
        numero: "200",
        bairro: "Centro",
        cidade: "Campinas",
        estado: "São Paulo",
        cep: "13010010",
        complemento: null,
        status_endereco: true,
        fk_empresa_id_empresa: null,       
        fk_pessoa_fisica_id_pessoa_fisica: 1,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("endereco", null, {});
  }
};
