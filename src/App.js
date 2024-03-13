import logo from "./logo.svg";
import PlantList from "./PlantList";
import { Suspense, useState, useCallback } from "react";
import Loading from "./Loading";
import "./App.css";
import AppHeader from "./AppHeader";
//@todo:atishay -> Make this a absolute  
import SideDrawer from "./components/SideDrawer";
import AddPlant from "./AddPlant.js"
import { createContext } from 'react';
import Collapse, { Pannel } from "./components/Collapse/Collapse.jsx";

/*
context is a way to pass data through the component tree without having to pass props down manually at every level.

*/


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
        <div className="faq-container">
          <Collapse>
            <Pannel>
              <h1>What is a plant?</h1>
              <p>A plant is a living organism that generally does not move and absorbs nutrients from the environment. It is a member of the kingdom Plantae, which includes trees, shrubs, herbs, grasses, ferns, and mosses. Plants are the primary producers in most ecosystems and form the basis of the food web in those ecosystems.</p>
            </Pannel>
            <Pannel>
              <h1>How to care a rubber plant</h1>
              <p>To care for a rubber plant (Ficus elastica), provide it with bright, indirect light, keeping it away from direct sunlight to prevent leaf scorching, while maintaining temperatures between 60-80°F (15-27°C) and avoiding cold drafts. Water when the top inch of soil is dry, ensuring thorough watering and proper drainage to prevent root rot, and maintain higher humidity levels through misting, humidity trays, or a humidifier, especially in dry conditions. Use a well-draining potting mix, fertilizing monthly during the growing season with diluted balanced fertilizer, and prune to shape and remove dead or damaged leaves. Repot every 2-3 years as needed, and monitor for pests such as spider mites, mealybugs, and scale insects, treating promptly if detected, to ensure the plant remains healthy and vibrant.</p>
            </Pannel>
          </Collapse>
        </div>
        <SideDrawer open={isSidedrawerOpen} onCloseDrawer={useCallback(() => {
          setSideDrawerOpen(false)
        }, [])}>
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