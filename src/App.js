import logo from "./logo.svg";
import PlantList from "./PlantList";
import { Suspense, useState } from "react";
import Loading from "./Loading";
import "./App.css";
import AppHeader from "./AppHeader";
//@todo:atishay -> Make this a absolute  
import SideDrawer from "./components/SideDrawer";
import AddPlant from "./AddPlant.js"


function App() {
  const [isSidedrawerOpen, setSideDrawerOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <AppHeader onClickAddPlant={() => {
          setSideDrawerOpen(true)
        }} />
      </header>
      <div className="plant-list-container">
        <PlantList />
      </div>
      <SideDrawer open={isSidedrawerOpen} onCloseDrawer={() => {
        setSideDrawerOpen(false)
      }}>
        <h1>
          Side Drawer will be rendered
        </h1>
        <AddPlant />


      </SideDrawer>
    </div>
  );
}

export default App;



/*

->Continue adding css to the side bar and keep learning
https://developer.mozilla.org/en-US/docs/Web/CSS/position
https://css-tricks.com/almanac/properties/p/position/








*/