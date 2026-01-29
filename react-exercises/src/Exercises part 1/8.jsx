import React, { useState} from "react";

function LoginFOrm () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    if (!username) {
        setMessage("Username is required")
    }
}