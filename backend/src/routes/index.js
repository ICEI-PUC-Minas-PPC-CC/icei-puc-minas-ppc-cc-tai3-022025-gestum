// src/routes/index.js

import express from "express";

// importe aqui TODAS as rotas que forem sendo criadas
import certificadoRoutes from "./certificado_routes.js";
import empresaRoutes from "./empresa_routes.js";
// depois: import contatoRoutes from "./contato-routes.js";
// depois: import empresaRoutes from "./empresa-routes.js";

const router = express.Router();

// =========================
// Registro das rotas REST
// =========================

// certificados
router.use("/certificados", certificadoRoutes);
router.use("/empresas", empresaRoutes)
// exemplo futuro:
// router.use("/contatos", contatoRoutes);
// router.use("/empresas", empresaRoutes);

export default router;
