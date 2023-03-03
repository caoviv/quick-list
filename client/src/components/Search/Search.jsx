import { useEffect, useState } from "react";
import axios from "axios";

// CSS Styles 
import "./SearchStyles.css";

function Search() {
  // states
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  // effect after render
  useEffect(() => {
    // fetch recipe data function
    const fetchRecipes = async () => {
      // use axios to make a get request for recipes data from local server 5000
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      // response is then set to data state
      setData(res.data);
    };
    fetchRecipes();
    // runs when query state is changes
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Pick a recipe..."
        className="search-bar"
        // set value of the text input to data state for filter function
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="recipe-list">
        {/* use data state  */}
        {data
          // iterate over recipes array using .map
          .map((recipe) => (
            // output makes a list of recipes from the data fetched
            <li key={recipe.id} className="recipe-item">
              {recipe.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
