import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

registerRoutes(app);

const port = parseInt(process.env.PORT || "3001", 10);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
