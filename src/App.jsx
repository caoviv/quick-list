import "./App.css";
import './variables.css'
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipes />
    </div>
  );
}

export default App;
