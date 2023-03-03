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
  const { q } = req.query;

  const search = (data) => {
    // filter data which includes the req.query
    // recipe name is set to lower case to avoid case sensitivity
    return data.filter((recipe) => recipe.name.toLowerCase().includes(q));
  };

  
  // When implementing Mongodb 
  // const recipes = Recipe.find({$regex: q})
  // recipes var from above is then put as an argument in the below response.json replacing Recipes from recipes.js file

  res.json(search(Recipes));
});
