import { useState, useRef, useEffect } from "react"
import "./Select.css";

const Select = ({ options = [], onSelect = () => { }, placeholder = "Select..." }) => {
    const [isOptionListOpen, setOptionListOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);
    const labelRef = useRef(null);


    const isOptionSelected = () => {
        return Object.keys(selectedItem) ? true : false;
    }


    const onClickOption = (selectedOption) => {
        setInputValue("");
        setSelectedItem(selectedOption);
    }

    useEffect(() => {
        const elms = [inputRef.current, labelRef.current]
        window.addEventListener("click", (event) => {
            console.log(event.target);
            // const condition = elms.every((elm) => {
            //     event.target != elm;
            // });

            // console.log(condition);
            // if (condition) {
            //     setOptionListOpen(false);
            // }

            if (elms[0] != event.target && elms[1] != event.target) {
                setOptionListOpen(false);
            }

            // if (!elms.every(event.target)) {

            //     console.log("on click also called");
            // }

            // if (inputRef.current && !inputRef.current.contains(event.target)) {

            // }

        })

    }, [])

    const renderOptionList = () => {
        return options.map((optionItem) => {
            let selectedClass = "";
            if (isOptionSelected()) {
                selectedClass = optionItem.label == selectedItem.label ? "selected-item" : "";
            }
            return (<div className={"option-item " + selectedClass} onClick={(event) => {
                // event.stopPropagation();
                onClickOption(optionItem)
            }}>
                {optionItem.label}
            </div >)
        })
    }

    const onChangeInputBox = (event) => {
        const { target } = event
        setInputValue(target.value);
        event.stopPropagation();

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
    const isLabelVisible = () => {
        if (inputValue || !isOptionSelected()) {
            return false;
        } else {
            return true;
        }
    }

    const listEventOnFocus = (event) => {
        console.log("listEventOnFocus called");
        setOptionListOpen(true);
        event.stopPropagation();
    }



    return (
        <div className="select-container">
            <input type="search" className="select-input" onChange={onChangeInputBox}
                onClick={onChangeInputBox} value={inputValue}
                placeholder={placeholder}
                onBlur={handleInputBlur} ref={inputRef} onFocus={listEventOnFocus} >

            </input>
            {isLabelVisible() ?
                <span className="selected-label" onClick={onClickSelectedLabelBox} ref={labelRef}>{isOptionSelected ? selectedItem.label : ""}</span> : null}
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
hide the label when input value is changed
    - stop propogation of the on click event

*/



export default Select;