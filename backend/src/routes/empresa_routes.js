// src/routes/empresa-routes.js

import express from "express";
import * as EmpresaController from "../controllers/empresa_controller.js";

const router = express.Router();

router.get("/", EmpresaController.list);
router.get("/:id", EmpresaController.show);
router.post("/", EmpresaController.create);
router.put("/:id", EmpresaController.update);
router.delete("/:id", EmpresaController.destroy);

export default router;
