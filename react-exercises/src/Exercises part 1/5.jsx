import React, { useState } from "react";

const ChangeColor = () => {
    const [color, setColor] = useState("bg-blue-400");

    function change() {
        setColor(prevColor =>
            prevColor === 'bg-blue-400' ? 'bg-green-500' : 'bg-blue-400'
        )
    }

    return (
        <div className={`${color} min-h-screen flex items-center justify-center`}>
                 <button onClick={change} 
                    className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
                 >
                    Change color
                </button>
        </div>
    )
}

export default ChangeColor