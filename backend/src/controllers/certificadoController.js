const certificadoService = require("../services/certificadoService");

module.exports = {
  async index(req, res, next) {
    try {
      const itens = await certificadoService.listarCertificados();
      return res.json(itens);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const item = await certificadoService.buscarCertificadoPorId(
        req.params.id
      );

      if (!item)
        return res.status(404).json({ error: "Certificado não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const novo = await certificadoService.criarCertificado(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const atualizado = await certificadoService.atualizarCertificado(
        req.params.id,
        req.body
      );

      if (!atualizado)
        return res.status(404).json({ error: "Certificado não encontrado" });

      return res.json(atualizado);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await certificadoService.removerCertificado(req.params.id);

      if (!ok)
        return res.status(404).json({ error: "Certificado não encontrado" });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
