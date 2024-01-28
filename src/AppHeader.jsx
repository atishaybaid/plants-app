import { useContext } from "react";

import Button from "./components/Button"
import "./AppHeader.css"

import { ThemeContext } from "./App";
const AppHeader = ({ onClickAddPlant }) => {
    const { theme, updateTheme } = useContext(ThemeContext);

    return (<div className="app-header">
        <Button label="Add Plant" onClick={onClickAddPlant}></Button>
        <Button label={theme == "light" ? "Use Dark Theme" : "Use Light Theme"} onClick={() => {
            updateTheme(theme == "light" ? "dark" : "light")
        }}></Button>

    </div>)

}


export default AppHeader;