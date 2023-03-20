import React, { useState } from 'react'
import Axios from 'axios';
import './signup.css'

export const Signup = ({signUpList, setSignUpList}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [apliemp, setApliEmp] = useState("");

    const createUserSu = () => {
        Axios.post("http://localhost:3001/insertUserSu", {  username:username, 
                                                            password:password,
                                                            email:email,
                                                            apliemp:apliemp,
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
    const handleApliEmp = (e) =>{
        setApliEmp(e.target.value);
    }

    const handlePostings = () =>  {
        setSignUpList([...signUpList, {username:username, email:email,
                                         password:password,apliemp:apliemp,
                                         }]);
        console.log(signUpList);
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
        <div className='postingform-listing'>
            {signUpList.length > 0 ? 
            <div>
                    {signUpList.map((value) => 
                    <div className='signupcard'>
                        <div className='signupcard-username'>Username: {value.username}</div>
                        <div className='signupcard-email'>email: {value.email}</div>
                        <div className='signupcard-password'>password: {value.password}</div>
                        <div className='signupcard-apliemp'>apliemp: {value.apliemp}</div>
                    </div>)
                    }
            </div>
                : (<div></div>)
            }
        </div>
    </div>
  )
}

export default Signup
