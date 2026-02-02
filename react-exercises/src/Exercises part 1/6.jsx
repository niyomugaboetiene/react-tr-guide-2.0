import { useState } from "react";

const MouseTrigger = () => {
    const [isMOuseEntered, setIsMOuseEntered] = useState(false);

    return (
        <div className="min-h-screen bg-yellow-100 flex justify-center items-center">
          <div className="bg-yellow-300 h-32 w-62 rounded-xl shadow-lg">
              <h1 className="text-center mt-2 text-xl text-yellow-800 font-bold">Hover to see magic</h1>
                <div  onMouseEnter={() => setIsMOuseEntered(true)} onMouseLeave={() => setIsMOuseEntered(false)}>
                  <p className="text-center mt-4">{isMOuseEntered ? 'Mouse inside' : 'Mouse outside'}</p>
                </div>
          </div>
        </div>
    )
}

export default MouseTrigger