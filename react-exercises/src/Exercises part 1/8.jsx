import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 

    if (!username && !password) {
        setMessage("Both username and password required");
        return;
    }

    if (!username) {
      setMessage("Username is required");
      return;
    }

    if (!password) {
      setMessage("Password is required");
      return;
    }

    setMessage("Login successfully");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-100">
      <form onSubmit={handleSubmit} className="bg-amber-200 p-3 rounded-lg shadow-xl">
        <h2 className="text-center text-xl mb-3 text-amber-800">Form validation</h2>
        <div className="mt-2 mb-2 w-100">
        <label className="block text-lg text-amber-800">Username</label>
        <input
          type="text"
          className="border w-full py-1 rounded-lg border-amber-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> 
        </div>
        
        <div className="mt-2 mb-4">
           <label className="block text-lg text-amber-800">Password</label>
           <input
             type="password"
             className="border w-full py-1 rounded-lg border-amber-500"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
         </div>

        <button type="submit" className="bg-amber-400 w-full py-1 text-white rounded-lg hover:bg-amber-500 transition-colors mb-3">Submit</button>

        {message && <p className="text-center font-bold">{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
