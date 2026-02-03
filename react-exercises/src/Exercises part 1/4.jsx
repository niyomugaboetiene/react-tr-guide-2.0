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
        <div className="min-h-screen flex justify-center items-center bg-blue-100">
             <form onSubmit={Submit} className="bg-blue-200 p-3 rounded-lg shadow-xl">
                <h2 className="text-center text-xl mb-3 text-blue-800">Input Fields</h2>
                <div className="mt-2 mb-2 w-100">
                    <label className="block text-lg text-blue-800">Username</label>
                    <input type="text" 
                         className="border w-full py-1 rounded-lg border-blue-500"
                         onChange={(e) => setUsername(e.target.value)}/> <br />
                </div>
                <div className="mt-2 mb-4">
                     <label className="block text-lg text-blue-800">Password</label>
                     <input type="password" onChange={(e) => setPassword(e.target.value)} 
                        className="border w-full py-1 rounded-lg border-blue-500"
                     /> 
                </div>

                <button className="bg-blue-400 w-full py-1 text-white rounded-lg hover:bg-blue-500 transition-colors mb-3">Submit</button>
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