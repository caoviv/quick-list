import { useState } from "react";
import { Recipes } from "../../data/recipes";
function Search() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Select an option"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="recipe-list">
        {Recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(query)
        ).map((recipe) => (
          <li key={recipe.id} className="recipe">
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
