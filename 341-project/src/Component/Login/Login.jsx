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
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input value={pass} type="password" placeholder="*********" id="password" name="password" onChange={e => setPass(e.target.value)}/>
                <button type="submit">Log In</button>
            </form>
            <button>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login