import { useState } from "react";
import GroceryList from "../GroceryList/GroceryList";

// CSS Styles
import "./RecipeIngredientsStyles.css";

function RecipeIngredients({ recipe }) {
  // states
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [viewGroceryList, setViewGroceryList] = useState(false);
  const handleCheckBoxChange = (event) => {
    // object destructuring to extract 'value' and 'checked' from checkbox element
    const { value, checked } = event.target;
    // when the checkbox is checked
    if (checked) {
      // add the ingredient checked to the selectedIngredient state
      setSelectedIngredients([...selectedIngredients, value]);
      // when the checkbox is unchecked
    } else {
      // remove the ingredient checked to the selectedIngredient state
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== value)
      );
    }
  };

  return (
    <div class="module">
      <section>
        <h1>Ingredients</h1>
        <h2>{recipe.name}</h2>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  value={ingredient}
                  onChange={handleCheckBoxChange}
                />
                {ingredient}
              </label>
            </li>
          ))}
        </ul>
        {/* <button onClick={onClose}>Close</button> */}
        <button onClick={() => setViewGroceryList(true)}>+ Add to list</button>
      </section>
      {/* conditional render GroceryList comp only when a recipe is clicked  */}
      {viewGroceryList && <GroceryList ingredients={selectedIngredients} />}
    </div>
  );
}

export default RecipeIngredients;
