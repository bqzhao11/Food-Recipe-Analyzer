import React from "react";
import { useHistory } from "react-router";


function Home() {
    let history = useHistory();

    const onLoginClick = e => {
        history.push('/login')
    }

    const onCreateAccountClick = e => {
        history.push('/new-user')
    }

    return(

        <div className="container-fluid">
            <h2>Welcome to our Recipe Analyzer App</h2>
            <h4>Log in or create a new account to get started</h4>
            <button onClick={onLoginClick}>Log In</button>
            <button onClick={onCreateAccountClick}>Create Account</button>
        </div>
    );
}

export default Home;
