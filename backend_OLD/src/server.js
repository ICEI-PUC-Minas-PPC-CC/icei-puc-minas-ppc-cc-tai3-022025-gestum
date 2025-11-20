import express from "express";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middlewares/error-handler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Servidor Gestum rodando");
});

// ROTAS SEMPRE ANTES DO ERRO
app.use("/api/v1", routes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

// ERROR HANDLER — SEMPRE O ÚLTIMO
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
