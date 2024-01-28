import logo from "./logo.svg";
import PlantList from "./PlantList";
import { Suspense, useState } from "react";
import Loading from "./Loading";
import "./App.css";
import AppHeader from "./AppHeader";
//@todo:atishay -> Make this a absolute  
import SideDrawer from "./components/SideDrawer";
import AddPlant from "./AddPlant.js"
import { createContext } from 'react';



const ThemeContext = createContext(null);





function App() {
  const [isSidedrawerOpen, setSideDrawerOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const updateTheme = (updatedTheme) => {
    setTheme(updatedTheme);

  }


  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: updateTheme }}>
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
    </ThemeContext.Provider>
  );
}

export { App, ThemeContext };



/*

->Continue adding css to the side bar and keep learning
https://developer.mozilla.org/en-US/docs/Web/CSS/position
https://css-tricks.com/almanac/properties/p/position/








*/