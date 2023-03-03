import { useEffect, useState } from "react";
import { Recipes } from "../../data/recipes";
import axios from "axios";

function Search() {
  // states
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  // effect after render
  useEffect(() => {
    // fetch recipe data function
    const fetchRecipes = async () => {
      // use axios to make a get request for recipes data from local server 5000
      const res = await axios.get("http://localhost:5000");
      // response is then set to data status
      setData(res.data);
    };
    fetchRecipes();
    // empty array - runs only on the first render
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Pick a recipe..."
        className="search"
        // set value of the text input to data status for filter function 
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="recipe-list">
        {/* use data status  */}
        {data
          // iterate over recipes array using .map 
          .map((recipe) => (
            // output makes a list of recipes from the data fetched
            <li key={recipe.id} className="recipe">
              {recipe.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
