const express = require("express");
const router = express.Router();
const pessoaFisicaController = require("../controllers/pessoaFisicaController");

// GET /pessoas-fisicas
router.get("/", pessoaFisicaController.index);

// GET /pessoas-fisicas/:id
router.get("/:id", pessoaFisicaController.show);

// POST /pessoas-fisicas
router.post("/", pessoaFisicaController.store);

// PUT /pessoas-fisicas/:id
router.put("/:id", pessoaFisicaController.update);

// DELETE /pessoas-fisicas/:id
router.delete("/:id", pessoaFisicaController.destroy);

module.exports = router;
