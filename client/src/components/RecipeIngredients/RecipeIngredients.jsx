import { useState } from "react";
import GroceryList from "../GroceryList/GroceryList";

// CSS Styles
import "./RecipeIngredientsStyles.css";

function RecipeIngredients({ recipe }) {
  // states
  const [groceryList, setGroceryList] = useState([]);
  const [viewGroceryList, setViewGroceryList] = useState(false);
  const [checkedState, setCheckedState] = useState(false);

  const handleCheckboxChange = (position) => {};

  return (
    <div class="module">
      <form>
        <h1>Ingredients</h1>
        <h2>{recipe.name}</h2>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  value={ingredient}
                  checked={checkedState[index]}
                  onChange={handleCheckboxChange(index)}
                />
                {ingredient}
              </label>
            </li>
          ))}
        </ul>
        <input type="reset" value="Unselect all" />
        <button onClick={() => setViewGroceryList(true)}>+ Add to list</button>
      </form>
      {/* conditional render GroceryList comp only when a button is clicked for the first time*/}
      {viewGroceryList && <GroceryList groceryList={groceryList} />}
    </div>
  );
}

export default RecipeIngredients;
