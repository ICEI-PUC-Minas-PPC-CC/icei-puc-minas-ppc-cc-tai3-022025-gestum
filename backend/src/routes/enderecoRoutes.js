const express = require("express");
const router = express.Router();
const enderecoController = require("../controllers/enderecoController");

router.get("/", enderecoController.index);
router.get("/:id", enderecoController.show);
router.post("/", enderecoController.store);
router.put("/:id", enderecoController.update);
router.delete("/:id", enderecoController.destroy);

module.exports = router;
