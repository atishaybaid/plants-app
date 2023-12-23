import { useState, useRef } from "react"
import "./Select.css";

const Select = ({ options = [], onSelect = () => { }, placeholder = "Select..." }) => {
    const [isOptionListOpen, setOptionListOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);


    const isOptionSelected = () => {
        return Object.keys(selectedItem) ? true : false;
    }


    const onClickOption = (selectedOption) => {
        setInputValue("");
        setSelectedItem(selectedOption);
    }

    const renderOptionList = () => {
        return options.map((optionItem) => {
            let selectedClass = "";
            if (isOptionSelected()) {
                selectedClass = optionItem.label == selectedItem.label ? "selected-item" : "";
            }
            return (<div className={"option-item " + selectedClass} onClick={() => {
                onClickOption(optionItem)
            }}>
                {optionItem.label}
            </div >)
        })
    }

    const onChangeInputBox = ({ target }) => {
        setInputValue(target.value);

        setOptionListOpen(true);
    }

    const handleInputBlur = () => {
        // if (isOptionSelected()) {
        //     setInputValue(selectedItem.label);
        // } else {
        //     setInputValue("");
        // }
        setInputValue("");

    }

    const getInputValueToDisaply = () => {
        if (inputValue) {
            return inputValue;
        }

        if (isOptionSelected()) {
            return selectedItem.label;
        }
        return ""
    }
    const onClickSelectedLabelBox = () => {
        inputRef.current.focus();
    }

    return (
        <div className="select-container">
            <input type="search" className="select-input" onChange={onChangeInputBox}
                onClick={onChangeInputBox} value={inputValue}
                placeholder={isOptionSelected ? selectedItem.label : placeholder}
                onBlur={handleInputBlur} ref={inputRef} >

            </input>
            <span className="selected-label" onClick={onClickSelectedLabelBox}>{isOptionSelected ? selectedItem.label : ""}</span>
            {isOptionListOpen ? <div className="option-list" >
                {renderOptionList()}
            </div> : null}

        </div>
    )

}


/*
Logic for input box behaviour
- when user types, value should be filled
- when user selects something from option list,input box should have that value only
- when user types something and some value is also selected,then once typing is over(on blur of input)the selected value should be replaced

Next 
fix select behaviour with span


*/



export default Select;