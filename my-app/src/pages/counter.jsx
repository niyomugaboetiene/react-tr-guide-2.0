import React, { useState} from "react";

function COunter() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="min-h-screen bg-gray-600">
            <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={() => setCounter(counter -1)}>Decrement</button>
        </div>
    )
}

export default COunter;