import React, {useState} from "react";
import './login.css'
export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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
                    <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='login-password'>
                    <label htmlFor="password">Password</label>
                    <input value={pass} type="password" placeholder="*********" id="password" name="password" onChange={e => setPass(e.target.value)}/>
                </div>
                    <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login