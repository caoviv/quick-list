// CSS Styles
import "./GroceryListStyles.css";

function GroceryList({ ingredients }) {
  return (
    <div className="wrapper">
      <h1>Grocery List</h1>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
