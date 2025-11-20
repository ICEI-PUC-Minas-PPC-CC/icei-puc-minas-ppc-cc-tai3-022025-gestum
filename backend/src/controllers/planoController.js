const planoService = require("../services/planoService");

module.exports = {
  async index(req, res, next) {
    try {
      const planos = await planoService.listarPlanos();
      return res.json(planos);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const plano = await planoService.buscarPlanoPorId(req.params.id);
      if (!plano) {
        return res.status(404).json({ message: "Plano não encontrado" });
      }
      return res.json(plano);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const novo = await planoService.criarPlano(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const atualizado = await planoService.atualizarPlano(req.params.id, req.body);
      if (!atualizado) {
        return res.status(404).json({ message: "Plano não encontrado" });
      }
      return res.json(atualizado);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await planoService.removerPlano(req.params.id);
      if (!ok) {
        return res.status(404).json({ message: "Plano não encontrado" });
      }
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
