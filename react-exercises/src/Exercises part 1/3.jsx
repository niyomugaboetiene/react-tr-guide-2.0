import { useState } from "react";

const Input = () => {
    const [text, setText] = useState("");

    return (
        <div className="min-h-screen flex justify-center items-center bg-amber-100">
          <div>
            <textarea 
               onChange={(e) => setText(e.target.value)}
               className="border w-72 h-42 border-cyan-500 outline-cyan-500"
            >

            </textarea>

            <p className="text-center text-cyan-500">You write: <strong>{text}</strong></p>
          </div>
        </div>
    )
}

export default Input