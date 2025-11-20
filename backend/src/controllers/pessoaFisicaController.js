const pessoaFisicaService = require("../services/pessoaFisicaService");

async function index(req, res, next) {
  try {
    const pessoas = await pessoaFisicaService.listarPessoasFisicas();
    return res.json(pessoas);
  } catch (err) {
    next(err);
  }
}

async function show(req, res, next) {
  try {
    const { id } = req.params;
    const pessoa = await pessoaFisicaService.buscarPessoaFisicaPorId(id);

    if (!pessoa) {
      return res.status(404).json({ error: "Pessoa física não encontrada" });
    }

    return res.json(pessoa);
  } catch (err) {
    next(err);
  }
}

async function store(req, res, next) {
  try {
    const pessoa = await pessoaFisicaService.criarPessoaFisica(req.body);
    return res.status(201).json(pessoa);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const pessoa = await pessoaFisicaService.atualizarPessoaFisica(
      id,
      req.body
    );

    if (!pessoa) {
      return res.status(404).json({ error: "Pessoa física não encontrada" });
    }

    return res.json(pessoa);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const ok = await pessoaFisicaService.removerPessoaFisica(id);

    if (!ok) {
      return res.status(404).json({ error: "Pessoa física não encontrada" });
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
