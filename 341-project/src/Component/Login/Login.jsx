import React, {useEffect, useState} from "react";
import Axios from 'axios';
import './login.css'
export const Login = ({ changeTab, setlogin}) => {
    const [email1, setEmail1] = useState('');
    const [pass1, setPass1] = useState('');
    const [LoginList, setLoginList] = useState([]);
    const [email, setEmail]= useState();
    const [password, setPass]= useState();
    const [username, setUser]= useState();
    const [apliemp, setApliemp]= useState();
    useEffect(() => {
        Axios.get("http://localhost:3001/userSu").then((response) => {
            setLoginList(response.data);
        });
    }, []);

    const createUserLogin = () => {
        Axios.post("http://localhost:3001/insertUserLogin", {  username:username, 
                                                            password:password,
                                                            email:email,
                                                            apliemp:apliemp,
        }).then(() => {
            alert("Welcome " + username + "!\nYou have successfully logged in!");
            window.location.reload();
            changeTab("Home");
        });
    }
    const handleEmail = (e) => {
        setEmail1(e.target.value);
    }

    const handlePass = (e) => {
        setPass1(e.target.value); 
    }

    
    const handleLogin = () => {
        const loginUser = LoginList.find(user => user.email===email1);
        if(loginUser.email===email1 && loginUser.password===pass1){
            setUser(loginUser.username);
            setPass(loginUser.password);
            setEmail(loginUser.email);
            setApliemp(loginUser.apliemp);
            createUserLogin();
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