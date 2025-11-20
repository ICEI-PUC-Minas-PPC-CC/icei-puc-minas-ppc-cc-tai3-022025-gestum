// src/controllers/empresa-controller.js

import models from "../models/index.js";
import { createBaseController } from "./base_controller.js";

const { Empresa } = models;

// Desestrutura as funções padrão do CRUD
const {
  create,
  list,
  show,
  update,
  destroy
} = createBaseController(Empresa);

export {
  create,
  list,
  show,
  update,
  destroy
};
