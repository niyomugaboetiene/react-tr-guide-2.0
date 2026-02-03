import React from "react"
const Button = () => {
    const handleClick = () => {
        alert("Welcome to react event handling");
    }

    return (
        <div  className="min-h-screen flex justify-center items-center bg-sky-100">
            <button onClick={handleClick} className="bg-sky-400 px-12 py-2 text-white rounded-lg shadow-lg transition-colors hover:bg-sky-500">Click</button>
        </div>
    )
}
export default Button