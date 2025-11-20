// src/controllers/base-controller.js

export const createBaseController = (Model) => ({
  
  create: async (req, res, next) => {
    try {
      const item = await Model.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
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
        return res.status(404).json({ error: "Registro não encontrado" });
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
        return res.status(404).json({ error: "Registro não encontrado" });
      }
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: "Registro não encontrado" });
      }
      await item.destroy();
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }

});
