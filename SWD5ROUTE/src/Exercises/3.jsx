import { useState } from "react";

const Input = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <textarea onChange={(e) => setText(e.target.value)}></textarea>

            <p>You write: {text}</p>
        </div>
    )
}

export default Input