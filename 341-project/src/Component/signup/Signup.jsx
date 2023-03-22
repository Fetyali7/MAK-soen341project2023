import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './signup.css'
import Application from '../Application/Application';

export const Signup = ( {changeTab} ) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [apliemp, setApliEmp] = useState("");
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/userSu").then((response) => {
            setAccounts(response.data);
        });
    })

    const createUserSu = (event) => {
        event.preventDefault();
        if(!checkInputs()){
            return;
        }
        if(!PasswordConfirm()) {
            setPassword("");
            setPassword2("");
            return;
        }
        if(checkAccountExists()) {
            setUsername("");
            setPassword("");
            setPassword2("");
            setEmail("");
            return;
        }
        Axios.post("http://localhost:3001/insertUserSu", {  username:username, 
                                                            password:password,
                                                            email:email,
                                                            apliemp:apliemp,
        }).then(() => {
            setError("");
            alert("You have successfully signed up!");
            changeTab("Login");
        });
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
    }
    const PasswordConfirm = () => {
        if(password === password2) {
            return true;
        }
        setError("Password does not match");
        return false;
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleApliEmp = (e) =>{
        setApliEmp(e.target.value);
    }
    const checkInputs = () => {
        if(username === "") {
            setError("Cannot have empty fields");
            return false;
        }
        if(password === "") {
            setError("Cannot have empty fields");
            return false;
        }
        if(password2 === "") {
            setError("Cannot have empty fields");
            return false;
        }
        if(email === "") {
            setError("Cannot have empty fields");
            return false;
        }
        if(apliemp === "") {
            setError("Choose Applicant or Employer");
            return false;
        }
        return true;
    }
    const checkAccountExists = () => {
        var bool = false;
        accounts.map((acc) => {
            if(acc.username === username) {
                setError("Username already exists");
                console.log("helo")
                bool = true;
                return;
            }
            if(acc.email === email) {
                setError("Email already exists");
                bool = true;
                return;
            }
        });
        return bool;
    }

  return (
    <div className= "signup-form-container">
        <h2>SignUp</h2>
        <form className="signup-form">
        {error === "" ? <></> : <h4 className='Error'>{error}</h4>}
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
                <input placeholder="Enter Password again" value={password2} onChange={handlePassword2}></input>
            </div>
            <div className='signup-email'>
                <label>Email</label>
                <input placeholder="youremail@gmail.com" value={email} onChange={handleEmail}></input>
            </div>
            <div className='Applicant-employer'>
                <label>Are you an applicant or an employer?</label><br></br>
                <input type="radio" id="Applicant" name="Applicant-employer"  value="Applicant" onChange={handleApliEmp}></input>
                <lable for="candidate">Applicant             </lable>
                <input type="radio" id="employer" name="Applicant-employer"  value="Employer" onChange={handleApliEmp}></input>
                <label for="employer">Employer</label>
            </div><br></br>
                <button type="submit" name="signUp" onClick={createUserSu}>SignUp</button>
        </form>
        
    </div>
  )
}

export default Signup
