const funcionarioService = require("../services/funcionarioService");

module.exports = {
  async index(req, res, next) {
    try {
      const funcionarios = await funcionarioService.listarFuncionarios();
      return res.json(funcionarios);
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const func = await funcionarioService.buscarFuncionarioPorId(req.params.id);

      if (!func) {
        return res.status(404).json({ error: "Funcionário não encontrado" });
      }

      return res.json(func);
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const func = await funcionarioService.criarFuncionario(req.body);
      return res.status(201).json(func);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const func = await funcionarioService.atualizarFuncionario(
        req.params.id,
        req.body
      );

      if (!func) {
        return res.status(404).json({ error: "Funcionário não encontrado" });
      }

      return res.json(func);
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const ok = await funcionarioService.removerFuncionario(req.params.id);

      if (!ok) {
        return res.status(404).json({ error: "Funcionário não encontrado" });
      }

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
