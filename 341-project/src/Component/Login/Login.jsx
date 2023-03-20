import React, {useEffect, useState} from "react";
import Axios from 'axios';
import './login.css'
export const Login = ({ changeTab, setCurrentForm }) => {
    const [email1, setEmail] = useState('');
    const [pass1, setPass] = useState('');
    const [informationexist, setbool] = useState(false);
    const [LoginList, setLoginList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/userSu").then((response) => {
    //         setLoginList(response.data);
    //         setFilteredList(response.data);
    //     });
    // }, []);

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handlePass = (e) => {
    //     setPass(e.target.value); 
    // }

      
    
    //   const handleLogin = () => {
    //     let filtered = LoginList.filter(user => {
    //         return user.email.includes(email1);
    //       })
    //     let email = LoginList.find(user => user.email===email1).email;
    //     let password = LoginList.find(user => user.email===email1).password;
    //     let username = LoginList.find(user => user.email===email1).username;
    //     if(email===email1 && password===pass1){
        
    //         setFilteredList(filtered);
    //         alert("Welcome " + username + "!");
    //         }
    //     else{
    //         alert("Please try again!");
    //     }
        
    //   }
     return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className='login-username'>
                    <label htmlFor="email">Email</label>
                    <input value={email1} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </div>
                <div className='login-password'>
                    <label htmlFor="password">Password</label>
                    <input value={pass1} type="password" placeholder="*********" id="password" name="password"/>
                </div>
                    <button name="userBut">Log In</button>
            </form>
            {/* {LoginList.length > 0 ? (
                <div> {filteredList.map((value) => 
                    <div className='signupcard'>
                    <div className='signupcard-username'>Username: {value.username}</div>
                    <div className='signupcard-email'>email: {value.email}</div>
                    <div className='signupcard-password'>password: {value.password}</div>
                    <div className='signupcard-apliemp'>apliemp: {value.apliemp}</div>
                </div>
                )}
                </div>
                ) : (<div>This is where you can find a job!</div>)
            } */}
        </div>
        
    )
}

export default Login