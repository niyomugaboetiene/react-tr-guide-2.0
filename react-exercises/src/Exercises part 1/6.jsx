import { useState } from "react";

const MouseTrigger = () => {
    const [isMOuseEntered, setIsMOuseEntered] = useState(false);

    return (
        <div>
              <h1>Hover to see magic</h1>
                <div   onMouseEnter={() => setIsMOuseEntered(true)} onMouseLeave={() => setIsMOuseEntered(false)}>
                  <p>{isMOuseEntered ? 'Mouse inside' : 'Mouse outside'}</p>
                </div>
        </div>
    )
}

export default MouseTrigger