import Button from "./components/Button"
import "./AppHeader.css"

const AppHeader = ({ onClickAddPlant }) => {
    return (<div className="app-header">
        <Button label="Add Plant" onClick={onClickAddPlant}></Button>

    </div>)

}


export default AppHeader;