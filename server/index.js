import express from "express";
import cors from "cors";
import { Recipes } from "./data/recipes.js";
const app = express();
const PORT = 5000;

app.use(cors());

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

app.get("/", (req, res) => {
  res.json(Recipes);
});
