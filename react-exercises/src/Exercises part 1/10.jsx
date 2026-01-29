import { useState } from "react";

function KeyPressed() {
    const [lastKey, setLastKey] = useState("");

    return (
        <div>
            <input type="text" 
              onKeyDown={(e) => setLastKey(e.key)}
            />

            {lastKey && (
                <p>You pressed: {lastKey}</p>
            )}
        </div>
    )
}

export default KeyPressed