import logo from "./logo.svg";
import PlantList from "./PlantList";
import { Suspense } from "react";
import Loading from "./Loading";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Suspense fallback={<Loading />}>
            <PlantList />
          </Suspense>
        </a>
      </header>
    </div>
  );
}

export default App;
