import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "./auth";



function LogoutButton(props) {
    let history = useHistory();
    let auth = useAuth();


    return (
        <h2>
            Welcome {props.firstName} {props.lastName} <br />   
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