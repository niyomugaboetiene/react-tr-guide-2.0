import React, { useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-sky-100">
            <div className="bg-gray-300 p-3 py-6 px-12  rounded-lg shadow-lg">
                <h2 className="text-center mb-3 font-bold text-xl text-green-500">Counter</h2>
              <p className="text-center text-lg font-bold">{count}</p>
              <div className="flex justify-between space-x-5 mt-3">
                 <button onClick={increment} className="bg-blue-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors">Increment</button>
                 <button onClick={decrement} className="bg-green-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-green-400 transition-colors">Decrement</button>
              </div>
            </div>
        </div>
    )
    
}

export default Counter