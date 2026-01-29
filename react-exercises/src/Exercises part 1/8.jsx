import React, { useState} from "react";

function LoginFOrm () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    function handleSubmit() {
       if (!username) {
          setMessage("Username is required")
       }
    
        if (!password) {
            setMessage("Password is required")
        }  
    
        setMessage("Login successfully");

    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="">Usename</label> <br />
                <input type="text"  onClick={(e) => setUsername(e.target.values)} />

                <label htmlFor="">Password</label> <br />
                <input type="text"  onClick={(e) => setPassword(e.target.values)} />

                <button>Submit</button>

                {message && (
                    <p>{message}</p>
                )}
            </form>
        </div>
    )
}

export default LoginFOrm