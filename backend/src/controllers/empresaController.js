const empresaService = require("../services/empresaService");

async function index(req, res, next) {
  try {
    const empresas = await empresaService.listarEmpresas();
    return res.json(empresas);
  } catch (err) {
    next(err);
  }
}

async function show(req, res, next) {
  try {
    const { id } = req.params;
    const empresa = await empresaService.buscarEmpresaPorId(id);

    if (!empresa) {
      return res.status(404).json({ message: "Empresa não encontrada" });
    }

    return res.json(empresa);
  } catch (err) {
    next(err);
  }
}

async function store(req, res, next) {
  try {
    const nova = await empresaService.criarEmpresa(req.body);
    return res.status(201).json(nova);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const atualizada = await empresaService.atualizarEmpresa(id, req.body);

    if (!atualizada) {
      return res.status(404).json({ message: "Empresa não encontrada" });
    }

    return res.json(atualizada);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const ok = await empresaService.removerEmpresa(id);

    if (!ok) {
      return res.status(404).json({ message: "Empresa não encontrada" });
    }

    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};
