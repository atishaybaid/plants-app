import logo from "./logo.svg";
import PlantList from "./PlantList";
import { Suspense } from "react";
import Loader from "./Loader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="plant-list-container">
        <Suspense fallback={<Loader />}>
          <PlantList />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
