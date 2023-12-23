import { useState } from "react"
import "./Select.css";

const Select = ({ options = [], onSelect = () => { }, placeholder = "" }) => {
    const [isOptionListOpen, setOptionListOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");


    const onClickOption = (selectedOption) => {
        setInputValue(selectedOption.label);
    }

    const renderOptionList = () => {
        return options.map((optionItem) => {
            return (<div className="option-item" onClick={() => {
                onClickOption(optionItem)
            }}>
                {optionItem.label}
            </div>)
        })
    }

    const onChangeInputBox = ({ target }) => {
        setInputValue(target.value);

        setOptionListOpen(true);
    }

    return (
        <div className="select-container">
            <input type="search" onChange={onChangeInputBox} onClick={onChangeInputBox} value={inputValue} placeholder={inputValue ? inputValue : placeholder}></input>
            {isOptionListOpen ? <div className="option-list" >
                {renderOptionList()}
            </div> : null}

        </div>
    )

}



export default Select;