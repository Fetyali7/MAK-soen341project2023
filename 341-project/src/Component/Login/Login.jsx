import React, {useEffect, useState} from "react";
import Axios from 'axios';
import './login.css'
export const Login = ({ changeTab, setCurrentForm }) => {
    const [email1, setEmail] = useState('');
    const [pass1, setPass] = useState('');
    const [LoginList, setLoginList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/userSu").then((response) => {
            setLoginList(response.data);
        });
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value); 
    }

      
    
      const handleLogin = () => {
        let email = LoginList.find(user => user.email===email1).email;
        let password = LoginList.find(user => user.email===email1).password;
        let username = LoginList.find(user => user.email===email1).username;
        if(email===email1 && password===pass1){
            alert("Welcome " + username + "!");
            }
        else{
            alert("Please try again!");
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