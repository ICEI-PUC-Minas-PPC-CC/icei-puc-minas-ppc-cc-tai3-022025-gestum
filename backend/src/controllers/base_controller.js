// src/controllers/base-controller.js

export const createBaseController = (Model) => ({

  create: async (req, res, next) => {
    try {
      const item = await Model.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      // Erros de validação
      if (error.name === "SequelizeValidationError") {
        return res.status(400).json({
          error: "Erro de validação",
          details: error.errors.map(e => e.message)
        });
      }

      // Violação de unicidade
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({
          error: "Registro duplicado",
          details: error.errors.map(e => e.message)
        });
      }

      next(error);
    }
  },

  list: async (req, res, next) => {
    try {
      const items = await Model.findAll();
      return res.json(items);
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const item = await Model.findByPk(req.params.id);

      if (!item) {
        return res.status(404).json({
          error: "Registro não encontrado",
          id: req.params.id
        });
      }

      return res.json(item);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const item = await Model.findByPk(req.params.id);

      if (!item) {
        return res.status(404).json({
          error: "Registro não encontrado",
          id: req.params.id
        });
      }

      await item.update(req.body);
      return res.json(item);

    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        return res.status(400).json({
          error: "Erro de validação",
          details: error.errors.map(e => e.message)
        });
      }

      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({
          error: "Registro duplicado",
          details: error.errors.map(e => e.message)
        });
      }

      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      const item = await Model.findByPk(req.params.id);

      if (!item) {
        return res.status(404).json({
          error: "Registro não encontrado",
          id: req.params.id
        });
      }

      await item.destroy();
      return res.status(204).end();

    } catch (error) {
      next(error);
    }
  }

});
