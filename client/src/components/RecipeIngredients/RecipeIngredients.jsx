import { Recipes } from "../../../data/recipes";

// CSS Styles
import "./RecipeIngredientsStyles.css";

function RecipeIngredients() {
  return (
    <div className="wrapper">
      <h1>Ingredients</h1>
      <ul className="ingredients-list">
        <li  className="ingredient-item">
          {Recipes[0].ingredients.map((item) => <li>{item}</li>)}
        </li>
      </ul>
    </div>
  );
}

export default RecipeIngredients;
