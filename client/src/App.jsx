import "./App.css";
import "./variables.css";
import Navbar from "./components/Navbar/Navbar";
import Selection from "./components/Selection/Selection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Selection className="selection-comp"/>
    </div>
  );
}

export default App;
