// src/routes/empresa-routes.js

import { Router } from "express";
import { EmpresaController } from "../controllers/empresa_controller.js";

const router = Router();

router.post("/", EmpresaController.create);
router.get("/", EmpresaController.list);
router.get("/:id", EmpresaController.show);
router.put("/:id", EmpresaController.update);
router.delete("/:id", EmpresaController.destroy);

export default router;
