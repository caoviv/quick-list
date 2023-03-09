import "./App.css";
import "./variables.css";
import Navbar from "./components/Navbar/Navbar";
import RecipeSearch from "./components/RecipeSearch/RecipeSearch";
import RecipeIngredients from "./components/RecipeIngredients/RecipeIngredients";
import GroceryList from "./components/GroceryList/GroceryList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="main-section">
        <RecipeSearch className="recipe-search-comp" />
        <GroceryList />
      </section>
    </div>
  );
}

export default App;
