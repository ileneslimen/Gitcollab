import logo from "./logo.svg";
import "./App.css";
import Nourhen from "./Nourhen";
import Ala from "./Ala";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <Nourhen></Nourhen>
      <Ala></Ala>
    </div>
  );
}

export default App;
