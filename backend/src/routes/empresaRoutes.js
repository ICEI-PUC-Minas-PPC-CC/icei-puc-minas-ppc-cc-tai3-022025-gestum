const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresaController");

// GET /empresas
router.get("/", empresaController.index);

// GET /empresas/:id
router.get("/:id", empresaController.show);

// POST /empresas
router.post("/", empresaController.store);

// PUT /empresas/:id
router.put("/:id", empresaController.update);

// DELETE /empresas/:id
router.delete("/:id", empresaController.destroy);

module.exports = router;
