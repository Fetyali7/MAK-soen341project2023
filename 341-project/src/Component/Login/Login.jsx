import React, {useEffect, useState} from "react";
import Axios from 'axios';
import './login.css'
export const Login = ({ changeTab, setlogin}) => {

    // State variables for email, password, and login list
    const [email1, setEmail1] = useState('');
    const [pass1, setPass1] = useState('');
    const [LoginList, setLoginList] = useState([]);

    // useEffect to get user data from the backend
    useEffect(() => {
        Axios.get("http://localhost:3001/userSu").then((response) => {
            setLoginList(response.data);
        });
    }, []);

    // Function to create a new user login
    const createUserLogin = (username1, password1, email1, apliemp1) => {
        Axios.post("http://localhost:3001/insertUserLogin", {  username:username1, 
                                                            password:password1,
                                                            email:email1,
                                                            apliemp:apliemp1,
        }).then(() => {
            // Alert the user about successful login and reload the page
            alert("Welcome " + username1 + "!\nYou have successfully logged in!");
            window.location.reload();
            // Change the tab to Home
            changeTab("Home");
        });
    }
    const handleEmail = (e) => {
        setEmail1(e.target.value);
    }

    const handlePass = (e) => {
        setPass1(e.target.value); 
    }

    
    const handleLogin = (event) => {
        event.preventDefault();
        const loginUser = LoginList.find(user => user.email===email1);
        if(loginUser.email===email1 && loginUser.password===pass1){
            createUserLogin(loginUser.username,loginUser.password,loginUser.email,loginUser.apliemp);
        }
        else{
            // Alert the user if login fails and reset the password field
            alert("Please try again!!!");
            setPass1("");
        }
        
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className='login-username'>
                    <label htmlFor="email">Email</label>
                    <input value={email1} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={handleEmail}/>
                </div>
                <div className='login-password'>
                    <label htmlFor="password">Password</label>
                    <input value={pass1} type="password" placeholder="*********" id="password" name="password" onChange={handlePass}/>
                </div>
                    <button name="userBut" onClick={handleLogin}>Log In</button>
            </form>
        </div>
    )
}

export default Login