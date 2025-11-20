const service = require("../services/documentoService");

module.exports = {
  async index(req, res, next) {
    try {
      const docs = await service.listar();
      return res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const doc = await service.buscarPorId(req.params.id);

      if (!doc)
        return res.status(404).json({ error: "Documento não encontrado" });

      return res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const novo = await service.criar(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const atualizado = await service.atualizar(req.params.id, req.body);

      if (!atualizado)
        return res.status(404).json({ error: "Documento não encontrado" });

      return res.json(atualizado);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await service.remover(req.params.id);

      if (!ok)
        return res.status(404).json({ error: "Documento não encontrado" });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
