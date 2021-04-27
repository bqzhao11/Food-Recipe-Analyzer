import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "./auth";



function LogoutButton() {
    let history = useHistory();
    let auth = useAuth();


    return (
        <h2>
            Welcome {auth.user}
            <button 
                onClick={() => {
                    auth.signout(() => history.push('/login'))
                }}
            >
                Log Out
            </button>
        </h2>
    )
}

export default LogoutButton