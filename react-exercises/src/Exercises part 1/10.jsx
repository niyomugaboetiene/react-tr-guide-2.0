import { useState } from "react";

function KeyPressed() {
    const [lastKey, setLastKey] = useState("");

    return (
        <div className="bg-gray-500 min-h-screen flex justify-center items-center">
            <div className="">
              <h1 className="text-center text-2xl text-white font-bold">Write any key</h1>
               <input type="text" 
                   className="border w-full rounded px-6 py-1 mb-2 border-white text-white"
                   onKeyDown={(e) => setLastKey(e.key)}
               />

               {lastKey && (
                   <p className="text-white text-xl">You pressed: <strong>{lastKey}</strong></p>
               )}
            </div>

        </div>
    )
}

export default KeyPressed