// src/routes/certificado-routes.js

import express from "express";
import * as CertificadoController from "../controllers/certificado_controller.js";

const router = express.Router();

router.get("/", CertificadoController.list);
router.get("/:id", CertificadoController.show);
router.post("/", CertificadoController.create);
router.put("/:id", CertificadoController.update);
router.delete("/:id", CertificadoController.destroy);

export default router;
