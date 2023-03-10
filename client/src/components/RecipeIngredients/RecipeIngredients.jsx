import { Recipes } from "../../../data/recipes";

// CSS Styles
import "./RecipeIngredientsStyles.css";

function RecipeIngredients({ recipe }) {
  return (
    <div class="module">
      <h1>Ingredients</h1>
      <h2>{recipe.name}</h2>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li>
            <input type={"checkbox"} name={ingredient} key={index} />
            <label for="ingredient">{ingredient}</label>
          </li>
        ))}
      </ul>
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  );
}

export default RecipeIngredients;
