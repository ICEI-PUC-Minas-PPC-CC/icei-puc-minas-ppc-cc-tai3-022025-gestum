// src/routes/base-routes.js
//
// ESTE ARQUIVO É SOMENTE UM TEMPLATE PARA O TIME CONSULTAR
// NÃO É UTILIZADO DIRETAMENTE NA APLICAÇÃO
//

import express from "express";
import Controller from "../controllers/xxx-controller.js"; 
// Substituir "xxx" pelo nome da entidade

const router = express.Router();

// Rotas REST padrão
router.get("/", Controller.list);
router.get("/:id", Controller.show);
router.post("/", Controller.create);
router.put("/:id", Controller.update);
router.delete("/:id", Controller.destroy);

export default router;
