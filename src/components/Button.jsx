import "./Button.css"


const Button = ({ label = "Click Me", onClick = () => { } }) => {

    return (
        <button className="primary-btn" onClick={onClick}>
            {label}
        </button>
    )


}

export default Button;