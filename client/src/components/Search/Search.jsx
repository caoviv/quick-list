import { useEffect, useState } from "react";
import { Recipes } from "../../data/recipes";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get("http://localhost:5000");
      setData(res.data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Pick a recipe..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="recipe-list">
        {data
          .filter((recipe) => recipe.name.toLowerCase().includes(query))
          .map((recipe) => (
            <li key={recipe.id} className="recipe">
              {recipe.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
