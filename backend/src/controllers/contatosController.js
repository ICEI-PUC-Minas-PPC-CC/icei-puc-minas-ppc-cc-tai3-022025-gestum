const contatosService = require("../services/contatosService");

module.exports = {
  async index(req, res, next) {
    try {
      const lista = await contatosService.listarContatos();
      return res.json(lista);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const item = await contatosService.buscarContatoPorId(req.params.id);

      if (!item)
        return res
          .status(404)
          .json({ error: "Contato não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const novo = await contatosService.criarContato(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const item = await contatosService.atualizarContato(
        req.params.id,
        req.body
      );

      if (!item)
        return res
          .status(404)
          .json({ error: "Contato não encontrado" });

      return res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await contatosService.removerContato(req.params.id);

      if (!ok)
        return res
          .status(404)
          .json({ error: "Contato não encontrado" });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
