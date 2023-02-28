import "./App.css";
import './variables.css'
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
    </div>
  );
}

export default App;