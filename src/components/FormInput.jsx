import { useState, forwardRef } from "react"

const FormInput = forwardRef((props, ref) => {
    const [inputValue, setInputValue] = useState("");
    const { label = "", type = "text", placeholder = "type", name = "" } = props

    const onChangeInputValue = (event) => {
        const { type } = props;
        let changedValue = ""
        if (type == "checkbox") {
            changedValue = event.target.checked;
        } else {
            changedValue = event.target.value;
        }
        setInputValue(changedValue);

    }

    const renderFromEle = () => {
        const { type } = props;

        switch (type) {
            case "text": {
                return (
                    <div>
                        {label ? <label >{label}</label> : null}
                        <input type="text" placeholder={placeholder} value={inputValue}
                            onChange={onChangeInputValue} ref={ref} name={name}></input>
                    </div>
                )
            }

            case "checkbox": {
                return (
                    <div>

                        <input type="checkbox" value={inputValue}
                            onChange={onChangeInputValue} ref={ref} name={name}></input>
                        {label ? <label >{label}</label> : null}
                    </div>
                )

            }

        }
    }

    return (
        renderFromEle()

    )


})


export default FormInput;