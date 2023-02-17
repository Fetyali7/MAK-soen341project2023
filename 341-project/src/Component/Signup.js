import React, { useEffect, useState } from 'react'

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [type, setType] = useState("Student");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handlePasswordConfirm = (e) => {
        if(e.target.value === password) {
            return;
        }
        else {
            setError(true);
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

  return (
    <div className='signup'>
        <label>Username</label>
        <input placeholder="Username" value={username} onChange={handleUsername}></input>
        <label>Password</label>
        <input placeholder="Password" value={password} onChange={handlePassword}></input>
        <label>Confirm Password</label>
        <input placeholder="Enter Password again" value={password} onChange={handlePasswordConfirm}></input>
        <label>Email address</label>
        <input placeholder="Email" value={email} onChange={handleEmail}></input>
    </div>
  )
}
