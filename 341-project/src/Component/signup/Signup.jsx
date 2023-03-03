import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './signup.css'

export const Signup = ({signUpList, setSignUpList}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [type, setType] = useState("Student");

    const createUserSu = () => {
        Axios.post("http://localhost:3001/insertUserSu", {  username:username, 
                                                            password:password,
                                                            email:email,
        }).then(() => {
            alert("Sucess");
        });
    }

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
    <div className= "signup-form-container">
        <h2>SignUp</h2>
        <form className="signup-form">
            <div className='signup-username'>
                <label>Username</label>
                <input name="usernameIn" placeholder="Username" value={username} onChange={handleUsername}></input>
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
                <input placeholder="youremail@gmail.com" value={email} onChange={handleEmail}></input>
            </div><br></br>
                <button type="submit" name="signUp" onClick={createUserSu}>SignUp</button>
        </form>
    </div>
  )
}

export default Signup
