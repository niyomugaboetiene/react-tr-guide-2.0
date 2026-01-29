import React, { useState } from "react";

const ChangeColor = () => {
    const [color, setColor] = useState("bg-blue-400");

    function change() {
        setColor('bg-green-500')
    }

    return (
        <div className={`${color} min-h-screen`}>
            <button onClick={ChangeColor}>Change color</button>
        </div>
    )
}

export default ChangeColor