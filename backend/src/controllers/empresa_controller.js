// src/controllers/empresa-controller.js

import db from "../models/index.js";
const { Empresa, Plano } = db;

export const EmpresaController = {
  // --------------------------------------------------------
  // 1) Criar empresa
  // --------------------------------------------------------
  async create(req, res, next) {
    try {
      const { razaoSocial, cnpj, fkPlanoIdPlano } = req.body;

      // FK - plano existe?
      const planoExiste = await Plano.findByPk(fkPlanoIdPlano);
      if (!planoExiste) {
        return res.status(400).json({
          error: "Plano inválido",
          detail: "O plano informado não existe"
        });
      }

      const empresa = await Empresa.create({
        razaoSocial,
        cnpj,
        fkPlanoIdPlano
      });

      return res.status(201).json(empresa);

    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({
          error: "CNPJ já cadastrado",
          detail: error.errors.map(e => e.message)
        });
      }

      if (error.name === "SequelizeValidationError") {
        return res.status(400).json({
          error: "Erro de validação",
          detail: error.errors.map(e => e.message)
        });
      }

      next(error);
    }
  },

  // --------------------------------------------------------
  // 2) Listar empresas com filtros + paginação + ordenação
  // --------------------------------------------------------
  async list(req, res, next) {
    try {
      const {
        page = 1,
        pageSize = 20,
        sort = "idEmpresa:asc",
        q = ""
      } = req.query;

      const [campoOrdenacao, direcao] = sort.split(":");

      const offset = (page - 1) * pageSize;

      const where = {};

      if (q) {
        where.razaoSocial = { $like: `%${q}%` };
      }

      const result = await Empresa.findAndCountAll({
        where,
        include: [{ model: Plano, as: "plano" }],
        limit: Number(pageSize),
        offset,
        order: [[campoOrdenacao, direcao.toUpperCase()]]
      });

      return res.json({
        data: result.rows,
        meta: {
          total: result.count,
          page: Number(page),
          pageSize: Number(pageSize),
          hasNext: offset + Number(pageSize) < result.count
        }
      });

    } catch (error) {
      next(error);
    }
  },

  // --------------------------------------------------------
  // 3) Buscar empresa por ID
  // --------------------------------------------------------
  async show(req, res, next) {
    try {
      const empresa = await Empresa.findByPk(req.params.id, {
        include: [{ model: Plano, as: "plano" }]
      });

      if (!empresa) {
        return res.status(404).json({
          error: "Empresa não encontrada",
          id: req.params.id
        });
      }

      return res.json(empresa);

    } catch (error) {
      next(error);
    }
  },

  // --------------------------------------------------------
  // 4) Atualizar empresa
  // --------------------------------------------------------
  async update(req, res, next) {
    try {
      const empresa = await Empresa.findByPk(req.params.id);

      if (!empresa) {
        return res.status(404).json({
          error: "Empresa não encontrada"
        });
      }

      // Se trocar plano…
      if (req.body.fkPlanoIdPlano) {
        const planoExiste = await Plano.findByPk(req.body.fkPlanoIdPlano);
        if (!planoExiste) {
          return res.status(400).json({
            error: "Plano inválido",
            detail: "O plano informado não existe"
          });
        }
      }

      await empresa.update(req.body);

      return res.json(empresa);

    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({
          error: "CNPJ já cadastrado",
          detail: error.errors.map(e => e.message)
        });
      }

      if (error.name === "SequelizeValidationError") {
        return res.status(400).json({
          error: "Erro de validação",
          detail: error.errors.map(e => e.message)
        });
      }

      next(error);
    }
  },

  // --------------------------------------------------------
  // 5) Deletar empresa (soft delete)
  // --------------------------------------------------------
  async destroy(req, res, next) {
    try {
      const empresa = await Empresa.findByPk(req.params.id);

      if (!empresa) {
        return res.status(404).json({
          error: "Empresa não encontrada"
        });
      }

      await empresa.destroy(); // paranoid → marcar deleted_at

      return res.status(204).end();

    } catch (error) {
      next(error);
    }
  }
};
