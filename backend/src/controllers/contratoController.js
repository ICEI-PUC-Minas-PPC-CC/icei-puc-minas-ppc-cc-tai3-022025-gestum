const contratoService = require("../services/contratoService");

module.exports = {
  async index(req, res, next) {
    try {
      const lista = await contratoService.listarContratos();
      return res.json(lista);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const item = await contratoService.buscarContratoPorId(req.params.id);

      if (!item)
        return res.status(404).json({ error: "Contrato não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const novo = await contratoService.criarContrato(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const atualizado = await contratoService.atualizarContrato(
        req.params.id,
        req.body
      );

      if (!atualizado)
        return res.status(404).json({ error: "Contrato não encontrado" });

      return res.json(atualizado);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await contratoService.removerContrato(req.params.id);

      if (!ok)
        return res.status(404).json({ error: "Contrato não encontrado" });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
