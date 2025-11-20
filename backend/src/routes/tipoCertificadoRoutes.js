const express = require("express");
const router = express.Router();
const tipoController = require("../controllers/tipoCertificadoController");

router.get("/", tipoController.index);
router.get("/:id", tipoController.show);
router.post("/", tipoController.store);
router.put("/:id", tipoController.update);
router.delete("/:id", tipoController.destroy);

module.exports = router;
