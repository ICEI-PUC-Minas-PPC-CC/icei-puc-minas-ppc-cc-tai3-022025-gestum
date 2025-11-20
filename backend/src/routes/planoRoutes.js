const express = require("express");
const router = express.Router();
const planoController = require("../controllers/planoController");

router.get("/", planoController.index);
router.get("/:id", planoController.show);
router.post("/", planoController.store);
router.put("/:id", planoController.update);
router.delete("/:id", planoController.destroy);

module.exports = router;
