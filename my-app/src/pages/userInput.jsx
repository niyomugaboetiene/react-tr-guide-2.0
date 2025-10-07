import { useState } from "react"

function UserInput() {
    const [name, setName] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <p>{name}</p>
        </div>
    )
}

export default UserInput;