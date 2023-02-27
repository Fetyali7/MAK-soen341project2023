import React, {useState} from "react";
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
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="*********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button>Don't have an account? Register here.</button>
        </div>
    )
}