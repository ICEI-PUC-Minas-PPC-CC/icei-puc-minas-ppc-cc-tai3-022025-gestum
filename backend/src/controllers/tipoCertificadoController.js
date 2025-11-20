const tipoService = require("../services/tipoCertificadoService");

module.exports = {
  async index(req, res, next) {
    try {
      const itens = await tipoService.listarTipos();
      return res.json(itens);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const item = await tipoService.buscarTipoPorId(req.params.id);

      if (!item)
        return res.status(404).json({ error: "Tipo de certificado não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const novo = await tipoService.criarTipo(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const item = await tipoService.atualizarTipo(req.params.id, req.body);

      if (!item)
        return res.status(404).json({ error: "Tipo de certificado não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await tipoService.removerTipo(req.params.id);

      if (!ok)
        return res.status(404).json({ error: "Tipo de certificado não encontrado" });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
