import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega config.js
import configFile from "../config/config.js";

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize(config);
const db = {};
const basename = path.basename(__filename);

// Carrega todos os models dinamicamente
for (const file of fs.readdirSync(__dirname)) {
  if (file !== basename && file.endsWith(".js")) {
    const modelPath = pathToFileURL(path.join(__dirname, file)).href;

    const modelModule = await import(modelPath);
    const model = modelModule.default(sequelize, DataTypes);

    db[model.name] = model;
  }
}

// Associações
for (const modelName of Object.keys(db)) {
  if (typeof db[modelName].associate === "function") {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
