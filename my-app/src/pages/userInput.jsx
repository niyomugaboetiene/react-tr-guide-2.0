import { useState } from "react"

function UserInput() {
    const [name, setName] = useState("");
    return (
        <div>
            <label htmlFor="">Enter anything: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Type anything...."/>
            <p>{name}</p>
        </div>
    )
}

export default UserInput;