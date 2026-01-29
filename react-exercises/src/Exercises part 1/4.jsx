import React, { useState} from "react";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    function Submit(e) {
       e.preventDefault();
       setMessage(`Hello ${username} you submitted successfully`);
       setShowMessage(true);
       console.log('Username:', username)
       console.log('Passwrod:', password)
    }

    return (
        <div>
             <div>
                <input type="text" onChange={(e) => setUsername(e.target.value)} required/> <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} required/> <br />

                <button onClick={Submit}>Submit</button>
             </div>

             {showMessage && (
                 <>
                    {message}
                 </>
             )}
        </div>
    )
}

export default Form