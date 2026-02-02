import { useState } from "react";

function KeyPressed() {
    const [lastKey, setLastKey] = useState("");

    return (
        <div className="bg-green-500 min-h-screen">
            <div>
              <h1 className="text-center text-2xl">Write any key</h1>
               <input type="text" 
                   className="border-2 "
                   onKeyDown={(e) => setLastKey(e.key)}
               />

               {lastKey && (
                   <p>You pressed: {lastKey}</p>
               )}
            </div>

        </div>
    )
}

export default KeyPressed