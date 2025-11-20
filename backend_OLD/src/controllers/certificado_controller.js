// src/controllers/certificado-controller.js

import models from "../models/index.js";
import { createBaseController } from "./base_controller.js";

const { Certificado } = models;

// Instancia o CRUD base usando o model Certificado
const {
  create,
  list,
  show,
  update,
  destroy
} = createBaseController(Certificado);

export {
  create,
  list,
  show,
  update,
  destroy
};
