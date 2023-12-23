const AppHeader = ({ onClickAddPlant }) => {
    return (<div>App Header will be rendered

        <button onClick={() => {
            onClickAddPlant()
        }}>Add Plant</button>
    </div>)

}


export default AppHeader;