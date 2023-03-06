import "./App.css";
import "./variables.css";
import Navbar from "./components/Navbar/Navbar";
import RecipeSearch from "./components/RecipeSearch/RecipeSearch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeSearch className="recipe-search-comp" />
    </div>
  );
}

export default App;
