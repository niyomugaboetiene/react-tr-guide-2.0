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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label> <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> <br />

        <label>Password</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br />

        <button type="submit">Submit</button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
