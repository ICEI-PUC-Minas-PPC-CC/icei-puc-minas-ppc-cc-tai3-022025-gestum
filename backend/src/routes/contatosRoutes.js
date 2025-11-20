const express = require("express");
const router = express.Router();
const contatosController = require("../controllers/contatosController");

router.get("/", contatosController.index);
router.get("/:id", contatosController.show);
router.post("/", contatosController.store);
router.put("/:id", contatosController.update);
router.delete("/:id", contatosController.destroy);

module.exports = router;
