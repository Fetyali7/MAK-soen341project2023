import React, { useEffect, useState } from 'react'
import './signup.css'

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
    <div className='signup gradient__bg'>
        <div className='signup-username'>
            <label>Username</label>
            <input placeholder="Username" value={username} onChange={handleUsername}></input>
        </div>
        <div className='signup-password'>
            <label>Password</label>
            <input placeholder="Password" value={password} onChange={handlePassword}></input>
        </div>
        <div className='signup-confirmpassword'>
            <label>Confirm Password</label>
            <input placeholder="Enter Password again" value={password} onChange={handlePasswordConfirm}></input>
        </div>
        <div className='signup-email'>
            <label>Email address</label>
            <input placeholder="Email" value={email} onChange={handleEmail}></input>
        </div><br></br>
            <button type="submit">SignUp</button>
    </div>
  )
}

export default Signup
