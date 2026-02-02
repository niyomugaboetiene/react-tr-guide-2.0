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
        <div className="min-h-screen flex justify-center items-center bg-amber-100">
             <form onSubmit={Submit} className="bg-amber-200 p-3 rounded-lg shadow-xl">
                <div className="mt-2 mb-2 w-100">
                    <label className="block text-lg text-amber-800">Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/> <br />
                </div>
                <div className="mt-2 mb-4">
                     <label className="block text-lg text-amber-800">Password</label>
                     <input type="password" onChange={(e) => setPassword(e.target.value)} 
                        className="border w-full py-1 rounded-lg border-amber-500"
                     /> 
                </div>

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