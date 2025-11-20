const enderecoService = require("../services/enderecoService");

module.exports = {
  async index(req, res, next) {
    try {
      const dados = await enderecoService.listarEnderecos();
      return res.json(dados);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const item = await enderecoService.buscarEnderecoPorId(req.params.id);
      if (!item)
        return res.status(404).json({ error: "Endereço não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const novo = await enderecoService.criarEndereco(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const item = await enderecoService.atualizarEndereco(
        req.params.id,
        req.body
      );

      if (!item)
        return res.status(404).json({ error: "Endereço não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await enderecoService.removerEndereco(req.params.id);
      if (!ok)
        return res.status(404).json({ error: "Endereço não encontrado" });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
