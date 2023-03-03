import React, {useState} from "react";
import Axios from 'axios';
import './login.css'
export const Login = ({loginList, setloginList}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const createUser = () => {
        Axios.post("http://localhost:3001/insertUsers", {  email:email, 
                                                            pass:pass,
        }).then(() => {
            alert("Sucess");
        });
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

     return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className='login-username'>
                    <label htmlFor="email">Email</label>
                    <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={handleEmail}/>
                </div>
                <div className='login-password'>
                    <label htmlFor="password">Password</label>
                    <input value={pass} type="password" placeholder="*********" id="password" name="password" onChange={handlePass}/>
                </div>
                    <button type="submit" onClick={createUser}>Log In</button>
            </form>
        </div>
    )
}

export default Login