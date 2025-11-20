"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("documento", [
      {
        nome_documento: "Contrato_assinado.pdf",
        caminho_url: "https://exemplo.com/documentos/contrato1.pdf",
        tipo_mime: "application/pdf",
        tamanho_bytes: 500000,
        hash_documento: "abc123hashfake",
        descricao_documento: "Contrato assinado digitalmente.",
        fk_contrato_id_contrato: 1,
        fk_certificado_id_certificado: null,
        created_at: now,
        updated_at: now
      },
      {
        nome_documento: "Certificado_NR10.pdf",
        caminho_url: "https://exemplo.com/docs/certificado_nr10.pdf",
        tipo_mime: "application/pdf",
        tamanho_bytes: 300000,
        hash_documento: "def456hashfake",
        descricao_documento: "Certificado NR-10 do funcionário.",
        fk_contrato_id_contrato: null,
        fk_certificado_id_certificado: 1,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("documento", null, {});
  }
};
