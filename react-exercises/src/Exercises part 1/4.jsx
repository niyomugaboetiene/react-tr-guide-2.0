import React, { useState} from "react";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    function Submit(e) {
       e.preventDefault();
        
       if (!username || !password) return;
       setMessage(`Hello ${username} you submitted successfully`);
       setShowMessage(true);
       console.log('Username:', username)
       console.log('Passwrod:', password)
    }

    return (
        <div>
             <form onSubmit={Submit}>
                <input type="text" onChange={(e) => setUsername(e.target.value)}/> <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)}/> <br />

                <button>Submit</button>
             </form>

             {showMessage && (
                 <>
                    {message}
                 </>
             )}
        </div>
    )
}

export default Form