// config/config.js  (renomeie de .json para .js e ajuste package.json se quiser)
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    database: process.env.DB_NAME || "gestum_dev",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
    logging: false
  }
};
