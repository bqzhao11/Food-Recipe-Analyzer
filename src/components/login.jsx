import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "./auth";




function Login() {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // let { from } = location.state || { from: {pathname: '/'} };

    let login = async e => {
        await auth.signin(username, password, () => {
            history.replace('/dashboard')
        });
    };


    return(
        <div>
            <h2>This is the Login Page</h2>
            <label>
                Username: <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            </label><br />
            <label>
                Password: <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
            </label><br />
            <button onClick={login} >Log In</button>
        </div>
    );
}

export default Login;
