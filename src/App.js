import logo from "./logo.svg";
import PlantList from "./PlantList";
import { Suspense } from "react";
import Loading from "./Loading";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="plant-list-container">
        <PlantList />
      </div>
    </div>
  );
}

export default App;
