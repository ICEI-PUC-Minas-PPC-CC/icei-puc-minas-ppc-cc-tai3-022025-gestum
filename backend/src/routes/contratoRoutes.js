const express = require("express");
const router = express.Router();
const contratoController = require("../controllers/contratoController");

router.get("/", contratoController.index);
router.get("/:id", contratoController.show);
router.post("/", contratoController.store);
router.put("/:id", contratoController.update);
router.delete("/:id", contratoController.destroy);

module.exports = router;
