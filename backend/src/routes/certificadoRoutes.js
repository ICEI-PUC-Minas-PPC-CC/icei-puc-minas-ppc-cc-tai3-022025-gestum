const express = require("express");
const router = express.Router();
const certificadoController = require("../controllers/certificadoController");

router.get("/", certificadoController.index);
router.get("/:id", certificadoController.show);
router.post("/", certificadoController.store);
router.put("/:id", certificadoController.update);
router.delete("/:id", certificadoController.destroy);

module.exports = router;
