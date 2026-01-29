import React from "react"
const Button = () => {
    const handleClick = () => {
        alert("Welcome to react event handling");
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default Button